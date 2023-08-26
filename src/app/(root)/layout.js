import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";

export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
