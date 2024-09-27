import Logo from "@/public/assets/tahwil logo.svg";
import LinkedIn from "@/public/assets/icons/linkedin (1).svg";
import Whats from "@/public/assets/icons/social.svg";
import Face from "@/public/assets/icons/facebook (3).svg";
import Insta from "@/public/assets/icons/social (1).svg";
const Footer = () => {
  return (
    <div>
      <div className="text-white bg-black px-12 flex justify-between py-10">
        <div className="">
          <img className="w-40" src={Logo} alt="logo" />
        </div>
        <div className="">
          <ul className="grid gap-0.5">
            <li>08088370727</li>
            <li>34 Sani</li>
            <li>Zangon daura</li>
            <li>estate Kado</li>
          </ul>
        </div>
        <div className="">
          <ul className="grid gap-0.5">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="">
          <p>tahwilsolutions@gmail.com</p>
          <ul className=" gap-2 flex">
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
