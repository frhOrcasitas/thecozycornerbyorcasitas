import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

<head>
  <meta name="google-site-verification" content="google-site-verification=MHKcEgM94rCxOEibNZcKeJSKbe1pE6EEZ5OSQ9hEPX4" />
</head>

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Cozy Corner",
  description: "A cozy online bookstore with hand-picked recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


