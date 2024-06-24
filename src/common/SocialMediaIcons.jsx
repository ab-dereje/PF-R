import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4 mt-40">
      <a href="" target="_blank" rel="noopener noreferrer" className="text-customBlue">
        <FaGithub size={32} />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer" className="text-customBlue">
        <FaInstagram size={32} />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer" className="text-customBlue">
        <FaLinkedin size={32} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
