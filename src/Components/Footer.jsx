import React from "react";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div>
          <div>
            <p>Find me...</p>
          </div>
          <div className="grid grid-flow-col gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mohammad-mubashir-kabir/"
            >
              <FaLinkedin className="text-4xl"></FaLinkedin>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/97.m.kabir/"
            >
              <FaFacebookSquare className="text-4xl"></FaFacebookSquare>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Mubashir-Kabir"
            >
              <FaGithubSquare className="text-4xl"></FaGithubSquare>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
