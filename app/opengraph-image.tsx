import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Tunelingo: Learn a Language with Music";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo-icon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          backgroundColor: "#030613",
          backgroundImage:
            "radial-gradient(ellipse at 20% 0%, rgba(139,124,248,0.28), transparent 55%), radial-gradient(ellipse at 85% 100%, rgba(45,212,191,0.2), transparent 55%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori JSX, not the DOM */}
        <img src={logoSrc} alt="" width={132} height={132} style={{ borderRadius: 32 }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div style={{ fontSize: 88, fontWeight: 700, color: "#f4f4f7" }}>
            Tunelingo
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#b9b9c6" }}>
            Learn a language with&nbsp;
            <span
              style={{
                backgroundImage: "linear-gradient(90deg,#8b7cf8,#2dd4bf)",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: 700,
              }}
            >
              music.
            </span>
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#7a7a88" }}>tunelingo.app</div>
      </div>
    ),
    { ...size },
  );
}
