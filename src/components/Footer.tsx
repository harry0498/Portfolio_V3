import { getData } from "@/data/data";

export default function Footer() {
  const data = getData();
  return (
    <footer className="container footer" id="contact">
      <div className="contact-block">
        <div>
          <h2>
            Contact<span aria-hidden="true">/</span>
          </h2>
          <p>Have a project, a role, or a technical problem in mind?</p>
        </div>
        <a className="contact-email" href={`mailto:${data.email}`}>
          {data.email}
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {data.name}
        </span>
        <a href={data.github}>GitHub</a>
      </div>
    </footer>
  );
}
