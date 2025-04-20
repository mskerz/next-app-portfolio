import type { Metadata } from "next";
import { Poppins, Kanit } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { ThemeWrapper } from "@/components/ui/color-mode";
import { RenderMounted } from "@/components/render";
// ใช้ React.lazy เพื่อโหลด component แบบ Lazy

// โหลดฟอนต์
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // ปรับได้ตามต้องการ
  style: ["normal", "italic"], // ปรับได้ตามต้องการ
  variable: "--font-poppins", // ชื่อตัวแปร CSS
  display: "swap",
});
const kanit = Kanit({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // ปรับได้ตามต้องการ
  style: ["normal", "italic"], // ปรับได้ตามต้องการ
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wichasin | Portfolio",
  description: "Software Developer Portfolio Website",
  keywords:
    "Portfolio, Software Developer, Web Developer, Next.js, React, Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${kanit.variable} ${poppins.variable}`}
    >
      <body suppressHydrationWarning>
        <RenderMounted>
          <Provider>
            <ThemeWrapper>
              <ClientLayout>{children}</ClientLayout>
            </ThemeWrapper>
          </Provider>
        </RenderMounted>
      </body>
    </html>
  );
}
