import type { Metadata } from "next";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { getData } from "@/data/data";

const data = getData();
export const metadata: Metadata = { alternates: { canonical: "/" } };
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${data.url}/#person`,
      name: data.name,
      url: data.url,
      jobTitle: data.jobTitle,
      description: data.description,
      sameAs: [data.github],
      knowsAbout: [
        "DevOps",
        "Platform engineering",
        "Full-stack development",
        ...data.skills["Platform & DevOps"],
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${data.url}/#website`,
      url: data.url,
      name: `${data.name} | ${data.jobTitle}`,
      publisher: { "@id": `${data.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${data.url}/#profile`,
      url: data.url,
      name: `${data.name} | ${data.jobTitle}`,
      mainEntity: { "@id": `${data.url}/#person` },
      isPartOf: { "@id": `${data.url}/#website` },
      hasPart: data.projects.map((project) => ({
        "@type": "SoftwareSourceCode",
        "@id": `${data.url}/#${project.slug}`,
        name: project.title,
        description: project.description,
        codeRepository: project.git,
        ...(project.url ? { url: project.url } : {}),
        author: { "@id": `${data.url}/#person` },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is serialised from local data with HTML delimiters escaped.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main-content" className="container" tabIndex={-1}>
        <Header />
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
    </>
  );
}
