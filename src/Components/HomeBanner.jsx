import React from "react";
import HomeHeader from "./HomeHeader";

const HomeBanner = () => {
  return (
    <div className="my-5">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hero  bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <HomeHeader></HomeHeader>
              <p className="py-6 text-justify">
                Web developer with the ability to learn and collaborate in
                rapidly changing environments and compositions. I am eager to
                tackle web development challenges to achieve a lasting impact on
                my skill set. having the opportunity to learn new skills and
                improve my ability to achieve both organizational and personal
                goals.
              </p>
              <div className="flex gap-3 justify-center">
                <button className="btn btn-primary">Contact</button>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1k1Y7vAb0ZQZ-yQXWJYLOWsRkJ0m4cFt2/view?usp=sharing"
                >
                  <button className="btn btn-primary">Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <img
            src="https://i.ibb.co/88x6XdP/IMG-5995-2.jpg"
            alt="Mubashir Kabir"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
