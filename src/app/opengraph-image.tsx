import { ImageResponse } from "next/og";
import { getData } from "@/data/data";

export const alt =
  "Harry Jenkins, DevOps Engineer. Platform engineering and full-stack development.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const data = getData();
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "64px 72px",
        background: "#101610",
        color: "#e7eee4",
        fontFamily: "monospace",
        border: "2px solid #303c30",
      }}
    >
      <div style={{ display: "flex", fontSize: 24, color: "#a6dd85" }}>
        harry@portfolio:~$ whoami
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 32, marginBottom: 20 }}>{data.name}</div>
        <div style={{ fontSize: 78, color: "#a6dd85", letterSpacing: -3 }}>
          {`${data.jobTitle}_`}
        </div>
        <div style={{ fontSize: 26, color: "#a4b29f", marginTop: 24 }}>
          Platform engineering · Full-stack development
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 22, color: "#a4b29f" }}>
        harryj.dev
      </div>
    </div>,
    size,
  );
}
