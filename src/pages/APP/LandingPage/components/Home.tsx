import { Button } from "@/src/components/Button";
import Frame from "@assets/Frame 10.svg";
const Home = () => {
  return (
    <div className="bg-BannerImage bg-cover bg-center min-h-[100dvh] ">
      <div className="bg-opacity-40 bg-[#0f463a] min-h-[100dvh] w-full flex items-center">
        <div className="flex items-center px-24 pt-14">
          <div className="relative">
            <img className=" w-[47.5vw]" src={Frame} alt="frame" />
          </div>
          <div className="grid gap-3 text-white absolute left-36">
            <h3 className="uppercase text-6xl">
              Unlocking
              <br /> Your
              <br /> POTENTIAL
            </h3>
            <p className="mt-6 text-xl">
              Transforming Potential into Reality through Expert Business
              <br />
              Development and Strategy
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
