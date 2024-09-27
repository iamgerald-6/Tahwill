import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className=" bg-gray-50  min-h-[100vh]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
