import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <p className="text-center p-6 text-2xl">
      This page was not found, please return to
      <Link className="text-blue" to="/">
        Home page
      </Link>
    </p>
  );
}
