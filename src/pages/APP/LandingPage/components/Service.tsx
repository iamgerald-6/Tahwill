import ServiceImage from "@assets/Service.svg";
const Service = () => {
  return (
    <div className="bg-secondary-100 mt-10 py-10 rounded-t-[20px] min-h-[100dvh] text-white">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl">Services</h3>
        <p className="text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br /> elit, sed do eiusmod tempor
        </p>
        <div className="flex gap-10 mt-16">
          <img className="w-[34vw]" src={ServiceImage} alt="service" />
          <div className="mt-10">
            <h4 className="text-3xl">Scalability</h4>
            <p className="text-lg">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div className="flex gap-10 mt-10 ms-28">
          <div className="mt-10">
            <h4 className="text-3xl">Efficiency</h4>
            <p className="text-lg">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
          <img className="w-[34vw]" src={ServiceImage} alt="service" />
        </div>
        <div className="flex gap-10 mt-10">
          <img className="w-[34vw]" src={ServiceImage} alt="service" />
          <div className="mt-10">
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
