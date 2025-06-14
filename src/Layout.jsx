import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BackgroundBeams } from "./components/ui/background-beams"; // adjust path as needed

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";

  return (
    <div className="relative min-h-screen bg-neutral-950 overflow-hidden">
      {/* Render animated background only on Home route */}
      {isHome && <BackgroundBeams />}

      <div className="relative z-10">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
