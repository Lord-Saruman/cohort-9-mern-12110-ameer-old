import { Outlet } from 'react-router-dom';

export const AppShell = (): JSX.Element => (
  <main className="app-shell">
    <Outlet />
  </main>
);
