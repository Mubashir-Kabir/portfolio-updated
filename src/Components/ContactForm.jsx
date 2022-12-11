import React from "react";

const ContactForm = () => {
  return (
    <div className="my-10">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-base-200 ">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="">Wnat to talk to me? or any farther details..</div>
          </div>
          <img
            src="https://i.ibb.co/M1t7pv0/pngwing-com-3.png"
            alt=""
            className="p-6 h-52 md:h-64"
          />
        </div>
        <form
          action="https://formsubmit.co/759dc53b3d0f91e79d85ff54b53dfeac"
          method="POST"
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              name="Name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded "
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              name="Email"
              id="email"
              type="email"
              className="w-full p-3 rounded "
              data-temp-mail-org="1"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              name="Massage"
              id="message"
              rows="3"
              className="w-full p-3 rounded "
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-gray-400 text-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
