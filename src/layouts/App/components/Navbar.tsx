import Logo from "@assets/tahwil logo.svg";
const Navbar = () => {
  const navData = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Service" },
    { id: 4, name: "Blog", route: "#" },
    { id: 5, name: "Contact" },
  ];
  return (
    <header className="absolute w-full px-14 py-2 ">
      <nav className="w-full text-white flex justify-between items-center">
        <div>
          <img className=" w-40" src={Logo} alt="logo" />
        </div>
        <ul className="flex gap-8">
          {navData.map((nav) => (
            <li key={nav.id} className="">
              {nav.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
