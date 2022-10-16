import React from "react";

const FormSection = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="name" className="text-xs">
            Your Name (required)
            <input
              type="text"
              id="name"
              className="w-full outline-none border-2 py-[13px] px-5 mt-2 hover:shadow-md transition-shadow"
            />
          </label>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="text-xs">
            Your Email (required)
            <input
              type="email"
              id="email"
              className="w-full outline-none border-2 py-[13px] px-5 mt-2 hover:shadow-md transition-shadow"
            />
          </label>
        </div>
        <div className="mt-4">
          <label htmlFor="message" className="text-xs">
            Your Message
            <textarea
              id="message"
              cols="30"
              rows="8"
              className="w-full outline-none border-2 py-[13px] px-5 mt-2 hover:shadow-md transition-shadow"
            ></textarea>
          </label>
        </div>
        <button
          type="button"
          className="w-full text-[13px] font-semibold bg-primary text-white hover:bg-secondary transition-colors py-[15px] uppercase mt-3"
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default FormSection;
