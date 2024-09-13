//favor não alterar

import { Inter, Outfit } from "next/font/google";
import "../styles/globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Organiza",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={outfit.className}>
          {children}
        </body>
      </html>
  );
}
