import Footer from "./Components/Footer.";
import Navbar from "./Components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <br /> <br /><br /><br />
        <Footer />
      </body>
    </html>
  );
}