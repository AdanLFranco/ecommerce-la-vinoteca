import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost, Libre_Franklin } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

const jost = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Vinoteca Wines & Spirits Store",
  description: "Los mejores precios de bebidas en toda la red",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} ${libreFranklin.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            <>
              <NavBar />
              {children}
              <Footer />
            </>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
