import React from "react";
import experienceData from "./data/experience.json";

function Experience() {
  return (
    <div>
      <section>
        <div className="container my-20 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 mt-20">My Experience</h1>
          <div className={`grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4`}>
          {experienceData.map((exp, index) => (
            <div key={index} className="mb-2">
              <div className="h-full w-full mx-auto max-w-screen-xl">
                <div className="grid grid-cols-1 h-full p-4 md:p-8 md:pt-5">
                <div className="flex flex-row items-center w-full">
                  <div
                    className="block rounded-xl bg-black border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-pink-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>

                    <h2 className="mt-4 text-xl font-bold text-white">
                      {exp.role} - {exp.company}
                    </h2>

                    <p className="mt-1 text-l text-gray-300">
                      {exp.duration}
                    </p>

                    <p className="mt-1 text-sm text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
