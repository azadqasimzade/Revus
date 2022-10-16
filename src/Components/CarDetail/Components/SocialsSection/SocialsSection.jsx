import React from "react";
import { BsGoogle, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialsSection = () => {
  return (
    <>
      <ul className="flex items-center gap-4">
        <li className="border-r-2 pr-4">
          <a href="/" className="hover:text-primary transition-colors">
            <BsInstagram />
          </a>
        </li>
        <li className="border-r-2 pr-4">
          <a href="/" className="hover:text-primary transition-colors">
            <BsTwitter />
          </a>
        </li>
        <li className="border-r-2 pr-4">
          <a href="/" className="hover:text-primary transition-colors">
            <BsGoogle />
          </a>
        </li>
        <li>
          <a href="/" className="hover:text-primary transition-colors">
            <FaFacebookF />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialsSection;
