import NavBar from "@/components/navbar/NavBar";
import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brandit",
  description: "this is brandit store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
