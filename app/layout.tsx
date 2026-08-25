import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Athlete Market | Private College Recruiting Advisory",
  description:
    "Private college recruiting advisory for families who want experienced, hands-on guidance and 100+ coaches behind their athlete's recruiting process.",
  openGraph: {
    title: "The Athlete Market — Private College Recruiting Advisory",
    description:
      "An elite recruiting team of 100+ college coaches behind your athlete. See if your athlete qualifies.",
    siteName: "The Athlete Market",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" style={{ background: "#FAFBFC" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#FAFBFC] text-[#101828]">{children}</body>
    </html>
  );
}
