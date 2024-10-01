// import { Button } from "@mantine/core";

const Contacts = () => {
  return (
    <div className="mt-10 md:mx-20 py-16 mx-3">
      <div className="bg-secondary-100 md:mx-auto md:px-10  border md:rounded-[40px] rounded-[25px] py-14 text-white flex flex-col items-center">
        <h3 className="text-3xl">Contacts Us</h3>
        <div className="grid gap-5 md:w-[50%] w-[80%] md:mx-auto mt-10">
          <div className="grid">
            <label>Email</label>
            <input className="  px-5 py-2.5 border-b-2 border-r border-r-primary-400 border-primary-200 rounded-md" />
          </div>
          <div className="grid">
            <label>Name</label>
            <input className=" px-5 py-2.5 border-b-2 border-r border-r-primary-400 border-primary-200 rounded-md" />
          </div>
          <div className="grid">
            <label>Message</label>
            <textarea className=" px-5 py-2.5 border-b-2 border-r border-r-primary-400 border-primary-200 rounded-md" />
          </div>
          <div className="grid mt-3">
            <button className="bg-primary-100  py-2 rounded-md border-b-2 border-r-2 border-r-primary-400 border-primary-200 ">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
