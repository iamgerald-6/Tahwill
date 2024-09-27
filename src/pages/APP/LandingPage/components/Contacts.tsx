// import { Button } from "@mantine/core";

const Contacts = () => {
  return (
    <div className="mt-10 mx-20 py-16">
      <div className="bg-secondary-100 mx-auto px-10 rounded-[40px] py-14 text-white flex flex-col items-center">
        <h3 className="text-3xl">Contacts Us</h3>
        <div className="grid gap-5  w-[50%] mx-auto mt-10">
          <div className="grid">
            <label>Email</label>
            <input className=" px-5 py-2.5 border-b-2 border-r border-r-primary-400 border-primary-200 rounded-md" />
          </div>
          <div className="grid">
            <label>Name</label>
            <input className=" px-5 py-2.5 border-b-2 border-r border-r-primary-400 border-primary-200 rounded-md" />
          </div>
          <div className="grid">
            <label>Message</label>
            <textarea className=" px-5 py-2/5 border-b-2 border-r border-r-primary-400 border-primary-200 rounded-md" />
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
