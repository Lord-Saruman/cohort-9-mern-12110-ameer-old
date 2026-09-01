import { Link } from 'react-router-dom';

export const RegisterPage = (): JSX.Element => (
  <section className="auth-card" aria-labelledby="register-heading">
    <p className="eyebrow">Private by default</p>
    <h1 id="register-heading">Create your account</h1>
    <p>Registration, validation, and secure sessions are delivered before the note experience.</p>
    <Link className="button" to="/login">
      I already have an account
    </Link>
  </section>
);
