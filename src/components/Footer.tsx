import { getData } from "@/data/data";

export default function Footer() {
  const { email } = getData();

  return (
    <footer className="text-center sticky bottom-0 p-4 bg-background">
      <span>
        Send me an email: <a href={`mailto:${email}`}>{email}</a>
      </span>
    </footer>
  );
}
