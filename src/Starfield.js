/*
 * Adapted from react-starfield-animation@1.0.1 by Travis Fischer.
 * MIT license: LICENSES/react-starfield-animation.txt
 */
import { useEffect, useRef } from "react";

const random = (min, max) => Math.random() * (max - min) + min;

function resetParticle(particle, bounds, initial = false) {
  particle.bounds = bounds;
  particle.z = initial ? random(0, bounds.z.max) : bounds.z.max;
  const perspective = bounds.depth / (bounds.depth + particle.z);

  particle.x = random(bounds.x.min, bounds.x.max) / perspective;
  particle.y = random(bounds.y.min, bounds.y.max) / perspective;
  particle.ox = particle.x;
  particle.oy = particle.y;
  particle.oz = particle.z;
  particle.vx = 0;
  particle.vy = 0;
  particle.vz = random(-1, -10);
  particle.ax = 0;
  particle.ay = 0;
  particle.az = 0;
  particle.s = 0;
  particle.sx = 0;
  particle.sy = 0;
  particle.os = particle.s;
  particle.osx = particle.sx;
  particle.osy = particle.sy;
  particle.hue = random(120, 200);
  particle.lightness = random(70, 100);
  particle.alpha = 0;
}

function updateParticle(particle) {
  particle.vx += particle.ax;
  particle.vy += particle.ay;
  particle.vz += particle.az;
  particle.x += particle.vx;
  particle.y += particle.vy;
  particle.z += particle.vz;

  const { bounds } = particle;
  if (
    particle.sx - particle.sr > bounds.x.max ||
    particle.sy - particle.sr > bounds.y.max ||
    particle.z > bounds.z.max ||
    particle.sx + particle.sr < bounds.x.min ||
    particle.sy + particle.sr < bounds.y.min ||
    particle.z < bounds.z.min
  ) {
    resetParticle(particle, bounds);
  }

  particle.ox = particle.x;
  particle.oy = particle.y;
  particle.oz = particle.z;
  particle.os = particle.s;
  particle.osx = particle.sx;
  particle.osy = particle.sy;
}

function Starfield({
  numParticles = 300,
  lineWidth = 2,
  alphaFactor = 1,
  depth = 300,
  style,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame;
    let particles = [];
    let viewport;
    let bounds;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      viewport = { x: width / 2, y: height / 2 };
      bounds = {
        depth,
        width,
        height,
        x: { min: -viewport.x, max: width - viewport.x },
        y: { min: -viewport.y, max: height - viewport.y },
        z: { min: -depth, max: 1000 },
      };

      particles = Array.from({ length: numParticles }, () => {
        const particle = {};
        resetParticle(particle, bounds, true);
        return particle;
      });
    };

    const draw = () => {
      context.save();
      context.translate(viewport.x, viewport.y);
      context.clearRect(-viewport.x, -viewport.y, bounds.width, bounds.height);
      context.lineWidth = lineWidth;

      particles.forEach((particle) => {
        particle.s = bounds.depth / (bounds.depth + particle.z);
        particle.sx = particle.x * particle.s;
        particle.sy = particle.y * particle.s;
        particle.alpha = alphaFactor * (bounds.z.max - particle.z) / (bounds.z.max / 2);

        context.beginPath();
        context.moveTo(particle.sx, particle.sy);
        context.lineTo(particle.osx, particle.osy);
        context.strokeStyle = `hsla(${particle.hue}, 100%, ${particle.lightness}%, ${particle.alpha})`;
        context.stroke();
      });

      context.restore();
    };

    const tick = () => {
      if (reducedMotion) {
        draw();
        return;
      }
      particles.forEach(updateParticle);
      draw();
      animationFrame = window.requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [alphaFactor, depth, lineWidth, numParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="starfield-canvas"
      style={style}
      aria-hidden="true"
    />
  );
}

export default Starfield;