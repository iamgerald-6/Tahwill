import { Button } from "@/src/components/Button";
// import Frame from "/assets/Frame 10.svg";
const Home = () => {
  return (
    <div className="bg-BannerImage bg-cover bg-center min-h-[100dvh] ">
      <div className="bg-opacity-40 bg-[#0f463a] min-h-[100dvh] w-full flex pt-16 pb-6 items-center">
        <div className="border-t-primary-200 border-b-primary-400  border-r-primary-300 border-l-primary-300 shadow-md shadow-primary-300 border-[3px] rounded-[40px] backdrop:blur-md bg-black bg-opacity-80 md:mx-16 mx-2 flex items-center md:px-10 px-6 py-7">
          {/* <div className="relative">
           <img className=" md:w-[47.5%] w-[100vw]" src={Frame} alt="frame" />
          </div>  */}
          <div className="grid gap-3 text-white ">
            <h3 className="uppercase md:text-6xl sm:text-5xl text-4xl">
              Unlocking
              <br /> Your
              <br /> POTENTIAL
            </h3>
            <p className="mt-6 md:text-xl text-lg">
              Transforming Potential into Reality through Expert Business
              <br className="sm:block hidden" /> Development and Strategy
            </p>
            <div>
              <Button className="mt-6 opacity-100 !border-b-2 !border-r-2  button-gradient">
                Partner with us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
