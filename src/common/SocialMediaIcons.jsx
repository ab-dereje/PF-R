import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4 mt-32">
      <a href="" target="_blank" rel="noopener noreferrer" className="text-customBlue">
        <FaFacebook size={32} />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer" className="text-customBlue">
        <FaInstagram size={32} />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer" className="text-customBlue">
        <FaTwitter size={32} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
