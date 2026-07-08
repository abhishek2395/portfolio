import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Abhishek Jaiswal — AI Product Manager & AI Engineer";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0b0b09",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 75% -10%, rgba(106,169,49,0.28), rgba(11,11,9,0))",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 25,
            letterSpacing: 5,
            color: "#a4a094",
            textTransform: "uppercase",
          }}
        >
          Abhishek Jaiswal · AI Product Manager × AI Engineer
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.08,
            color: "#ece9e0",
          }}
        >
          <span>I build the AI products</span>
          <span style={{ color: "#a8d060" }}>I&apos;d manage.</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#a4a094",
          }}
        >
          <span>jaiswalabhishek.com</span>
          <span>98% automation · 300+ LLMs benchmarked · production agents</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
