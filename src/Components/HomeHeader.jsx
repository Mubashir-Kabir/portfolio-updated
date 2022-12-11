import React from "react";
import Typewriter from "typewriter-effect";

const HomeHeader = () => {
  return (
    <div>
      <div className="text-2xl font-extrabold">
        <h1>Hello, I am Mohammad Mubashir Kabir </h1>
        <div className="text-accent text-xl">
          <Typewriter
            options={{
              strings: [
                "MERN stack Developer",
                "Web Developer",
                "Full-stack Developer",
                "Frontend Developer",
                "React Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
