import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Noé González Mendoza | Senior Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#0f0f1a",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(247, 205, 0, 0.15) 0%, transparent 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          border: "10px solid #1e1e32",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "26px",
            color: "#F7CD00",
            fontWeight: 700,
            marginBottom: "16px",
            letterSpacing: "1px",
          }}
        >
          <span>&lt;</span>
          <span style={{ margin: "0 6px", color: "#ffffff" }}>Ing.</span>
          <span style={{ color: "#F7CD00" }}>Noé González Mendoza</span>
          <span style={{ marginLeft: "6px" }}>/&gt;</span>
        </div>

        <div
          style={{
            fontSize: "62px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "20px",
            letterSpacing: "-0.5px",
          }}
        >
          Senior Software Engineer
        </div>

        <div
          style={{
            fontSize: "30px",
            color: "#F7CD00",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          Full Stack · React · Next.js · Node.js
        </div>

        <div
          style={{
            fontSize: "22px",
            color: "#b8b8c7",
            maxWidth: "920px",
            lineHeight: 1.5,
            marginBottom: "36px",
          }}
        >
          Enterprise Systems · Multi-Tenant SaaS · SQL & Relational Data · Managua, Nicaragua
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            color: "#2ed573",
            backgroundColor: "rgba(46, 213, 115, 0.12)",
            padding: "8px 20px",
            borderRadius: "50px",
            border: "1px solid rgba(46, 213, 115, 0.35)",
          }}
        >
          <span>● Available for Remote Opportunities</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
