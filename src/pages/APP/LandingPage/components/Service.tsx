import ServiceImage from "/assets/Service.svg";
const Service = () => {
  return (
    <div className="bg-secondary-100 mt-10 py-10 md:px-0 px-3 rounded-t-[20px] min-h-[100dvh] text-white">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl">Services</h3>
        <p className="sm:text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br /> elit, sed do eiusmod tempor
        </p>
        <div className="md:flex gap-10 mt-16">
          <img
            className="md:w-[34vw] sm:w-[45vw] w-[60vw]"
            src={ServiceImage}
            alt="service"
          />
          <div className="md:mt-10 mt-4">
            <h4 className="text-3xl">Scalability</h4>
            <p className="text-lg">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div className="md:flex gap-10 md:mt-10 mt-16 md:ms-28">
          <img
            className="md:w-[34vw] sm:w-[45vw] w-[60vw] block md:hidden"
            src={ServiceImage}
            alt="service"
          />
          <div className="md:mt-10 mt-5">
            <h4 className="text-3xl">Efficiency</h4>
            <p className="text-lg">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
          <img
            className="w-[34vw] md:block hidden"
            src={ServiceImage}
            alt="service"
          />
        </div>
        <div className="md:flex gap-10 md:mt-10 mt-16">
          <img
            className="md:w-[34vw] sm:w-[45vw] w-[60vw]"
            src={ServiceImage}
            alt="service"
          />
          <div className="md:mt-10 mt-5">
            <h4 className="text-3xl">Reliability</h4>
            <p className="text-lg">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
