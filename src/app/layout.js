import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- META --> */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="uisual" content="Made with Uisual (uisual.com)" />
        <meta name="author" content="#" />
        <meta name="description" content="#" />
        <meta name="referrer" content="unsafe-url" />
        <meta name="robots" content="index, follow" />
        {/* <!-- SPEED --> */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* <!-- LINK --> */}
        <link rel="me" href="#" />
        <link rel="canonical" href="#" />
        <link rel="icon" type="image/png" href="#" sizes="48x48" />
        {/* <!-- PERFORMANCE --> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        />
        <link rel="preload" as="style" href="./style.css" />
        <link rel="stylesheet" href="./style.css" />
        {/* <!-- TITLE --> */}
        <title>Layer: Free Landing Page Template from Uisual</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
