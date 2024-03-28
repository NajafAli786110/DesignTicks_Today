import Footer from "@/Components/Header & Footer/Footer";
import Navbar from "@/Components/Header & Footer/Navbar";
import "./globals.css";

export const metadata = {
  title: "Design Ticks - Software Agency Services",
  description: "Software Agency Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/favicon.png"
          type="./Assets/images/DesignTicks_Logo.svg"
        />
      </head>
      <body className="flex flex-col items-center justify-center">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
