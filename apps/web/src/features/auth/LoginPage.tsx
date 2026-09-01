import { Link } from 'react-router-dom';

export const LoginPage = (): JSX.Element => (
  <section className="auth-card" aria-labelledby="login-heading">
    <p className="eyebrow">Welcome back</p>
    <h1 id="login-heading">Sign in to your notes</h1>
    <p>The typed form and session API are implemented in the authentication vertical slice.</p>
    <Link className="button" to="/register">
      Create an account
    </Link>
  </section>
);
