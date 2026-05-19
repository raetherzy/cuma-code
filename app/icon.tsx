import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1D1D1D",
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "monospace",
          color: "#F5F500",
        }}
      >
        CC
      </div>
    ),
    { ...size }
  );
}
