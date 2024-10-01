import Logo from "/assets/tahwil logo.svg";
import LinkedIn from "/assets/icons/linkedin (1).svg";
import Whats from "/assets/icons/social.svg";
import Face from "/assets/icons/facebook (3).svg";
import Insta from "/assets/icons/social (1).svg";
const Footer = () => {
  return (
    <div>
      <div className="text-white bg-black md:px-12 px-10 sm:flex  sm:justify-between py-10">
        <div className="">
          <img className="w-40" src={Logo} alt="logo" />
        </div>
        <div className="sm:mt-0 mt-6 sm:ps-0 ps-3">
          <ul className="grid gap-1">
            <li>08088370727</li>
            <li>34 Sani</li>
            <li>Zangon daura</li>
            <li>estate Kado</li>
          </ul>
        </div>
        <div className="sm:mt-0 mt-6 sm:ps-0 ps-3">
          <ul className="grid gap-1">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="sm:mt-0 mt-6 sm:ps-0 ps-3">
          <p>tahwilsolutions@gmail.com</p>
          <ul className=" gap-2 flex mt-2">
            <li>
              <img src={LinkedIn} alt="linkedIn" />
            </li>
            <li>
              <img src={Whats} alt="linkedIn" />
            </li>
            <li>
              <img src={Face} alt="linkedIn" />
            </li>
            <li>
              <img src={Insta} alt="linkedIn" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
