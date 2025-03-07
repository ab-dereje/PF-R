import React from 'react';
// import SocialMediaIcons from '../common/SocialMediaIcons';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';


function About() {
  return (
    <div className="bg-[#132B42] h-screen flex flex-col">
      <h1 className=' mt-32 text-white font-extrabold text-4xl flex justify-center'>About<h1 className='text-customBlue ml-4'>Me</h1></h1>
      <div className='flex justify-center items-center mt-6'>
        <img src="/abdi.png" alt="Profile" className="rounded-full shadow-lg w-[119px] h-[112px] justify-center"/>
      </div>
      <h1 className='text-white mt-4 text-xl font-bold'>Backend Developer</h1>
      <div className='mt-2 flex justify-around pl-20 pr-20'>
        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ullam odio deserunt! Non omnis corrupti ad deserunt quam, impedit asperiores laborum, numquam ut quos molestiae reprehenderit libero soluta reiciendis suscipit.</p>
      </div>
      <div className='mt-2'>
        <button className='text-[#051426] bg-[#29B2FF] rounded py-2 px-4 '>Read More</button>
      </div>
      {/* <SocialMediaIcons /> */}
      <div className="flex space-x-4 mt-32 ml-28">
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
    </div>
  );
}

export default About;
