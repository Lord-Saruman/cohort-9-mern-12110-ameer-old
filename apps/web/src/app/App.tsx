import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
