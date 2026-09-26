import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PortfolioRoutes } from './App';

function renderRoute(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <PortfolioRoutes />
    </MemoryRouter>
  );
}

test('homepage keeps four curated previews and links to the archives', () => {
  renderRoute('/');
  expect(screen.getByRole('heading', { name: "hi, i'm baani." })).toBeInTheDocument();

  const experienceSection = screen.getByRole('region', { name: "where i've spent my time" });
  expect(within(experienceSection).getAllByRole('article')).toHaveLength(4);
  expect(within(experienceSection).getByRole('link', { name: 'the full lore →' })).toHaveAttribute('href', '/experience');

  const projectsSection = screen.getByRole('region', { name: "things i've made" });
  expect(within(projectsSection).getAllByRole('article')).toHaveLength(4);
  expect(within(projectsSection).getByRole('link', { name: "more things i've made →" })).toHaveAttribute('href', '/projects');
  expect(within(projectsSection).queryByRole('heading', { name: 'CaptionNet' })).not.toBeInTheDocument();
});

test('experience route shows every entry in reverse chronological order', () => {
  renderRoute('/experience');

  expect(screen.getByRole('heading', { name: 'the full lore' })).toBeInTheDocument();
  const entries = screen.getAllByRole('article');
  expect(entries).toHaveLength(6);
  expect(entries.map((entry) => entry.querySelector('h3').textContent)).toEqual([
    'backend developer (python) — insurance project',
    'software engineer',
    'robotic process automation intern',
    'new york university bridge & spades',
    'events assistant',
    'marketing intern',
  ]);
  expect(screen.getByRole('link', { name: '← back home' })).toHaveAttribute('href', '/');
});

test('projects route shows the complete curated project list', () => {
  renderRoute('/projects');

  expect(screen.getByRole('heading', { name: "more things i've made" })).toBeInTheDocument();
  const projectSection = screen.getByRole('region', { name: "more things i've made" });
  expect(within(projectSection).getAllByRole('article')).toHaveLength(9);
  expect(within(projectSection).getByRole('heading', { name: 'CaptionNet' })).toBeInTheDocument();
  expect(within(projectSection).getByRole('link', { name: '← back home' })).toHaveAttribute('href', '/');
});
