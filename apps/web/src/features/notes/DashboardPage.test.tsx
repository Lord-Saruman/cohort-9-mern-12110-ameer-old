import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { DashboardPage } from './DashboardPage';

describe('DashboardPage', () => {
  it('shows a notes workspace, search field, and creation action', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <DashboardPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Notes' })).toBeInTheDocument();
    expect(screen.getByRole('searchbox', { name: 'Search notes' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'New note' })).toHaveAttribute('href', '/notes/new');
  });
});
