import AboutImage from "@assets/aboutImage.svg";
const About = () => {
  return (
    <div className="flex justify-center items-center min-h-[100dvh]">
      <div className="w-full px-24 py-14">
        <div className="bg-secondary-100 rounded-[40px] text-white   w-full py-6">
          <div className="flex justify-center gap-28">
            <div className="">
              <h3 className="text-5xl mt-2">About Us </h3>
              <p className="text-3xl  w-full mt-7">
                In a world where change is the
                <br /> only constant, businesses and
                <br />
                individuals alike seek the keys
                <br /> to sustainable growth and
                <br /> development. Tahwil solutions is
                <br /> a brand rooted in the essence
                <br />
                of transformation.
              </p>
            </div>
            <div className="me-[-115px]">
              <img className="w-[40vw] " src={AboutImage} alt="about-Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
