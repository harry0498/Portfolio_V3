import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="container not-found" tabIndex={-1}>
      <p className="eyebrow">Error 404</p>
      <h1>Path not found.</h1>
      <p>
        This page doesn’t exist. Head back to the portfolio to find my work and
        contact details.
      </p>
      <Link className="button button-primary" href="/">
        Back to home
      </Link>
    </main>
  );
}
