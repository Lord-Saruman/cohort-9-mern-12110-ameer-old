import { Navigate, Route, Routes } from 'react-router-dom';

import { DashboardPage } from '../features/notes/DashboardPage';
import { NoteEditorPage } from '../features/notes/NoteEditorPage';
import { LoginPage } from '../features/auth/LoginPage';
import { RegisterPage } from '../features/auth/RegisterPage';
import { AppShell } from './AppShell';

export const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route element={<AppShell />}>
      <Route path="/" element={<Navigate replace to="/notes" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/notes" element={<DashboardPage />} />
      <Route path="/notes/new" element={<NoteEditorPage />} />
      <Route path="/notes/:noteId" element={<NoteEditorPage />} />
    </Route>
  </Routes>
);
