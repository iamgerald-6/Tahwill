import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Service from "./components/Service";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Service />
      <Contacts />
    </div>
  );
};

export default LandingPage;
