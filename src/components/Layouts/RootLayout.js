import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-20">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
