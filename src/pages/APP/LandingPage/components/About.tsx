import AboutImage from "/assets/aboutImage.svg";
const About = () => {
  return (
    <div className="flex justify-center items-center min-h-[100dvh]">
      <div className="w-full xl:px-24 lg:px-20 md:px-16 sm:px-10 px-3 py-14">
        <div className="bg-secondary-100 md:rounded-[40px] rounded-[25px] text-white w-full py-6">
          <div className="md:flex md:justify-center xl:gap-28 lg:gap-20 md:gap-5">
            <div className="md:px-0 px-2">
              <h3 className="lg:text-5xl text-center md:text-start md:text-4xl text-4xl mt-2">
                About Us
              </h3>
              <p className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-3xl text-xl  md:text-start text-center  w-full mt-7">
                In a world where change is the
                <br className="sm:block hidden" /> only constant, businesses and
                <br className="sm:block hidden" />
                individuals alike seek the keys
                <br className="sm:block hidden" /> to sustainable growth and
                <br className="sm:block hidden" /> development. Tahwil solutions
                is
                <br className="sm:block hidden" /> a brand rooted in the essence
                <br className="sm:block hidden" />
                of transformation.
              </p>
            </div>
            <div className="xl:me-[-115px] md:me-[-110px] md:block flex justify-center md:mt-0 mt-5">
              <img
                className="md:w-[40vw] w-[90vw] "
                src={AboutImage}
                alt="about-Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
