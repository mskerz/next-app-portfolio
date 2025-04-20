// src/app/icon.tsx หรือ app/icon.tsx (ขึ้นกับโครงสร้างโปรเจกต์)

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

// ✅ export default ต้องเป็นฟังก์ชันที่ return ImageResponse
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        💻
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}
