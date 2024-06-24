import React from 'react';
import SocialMediaIcons from '../common/SocialMediaIcons';

function Home() {
  return (
    <div className='bg-[#051426] h-screen flex justify-around'>
      <div>
        <h1 className='text-white font-black text-4xl mt-56 mb-2'>Hi, I’m Abdi Dereje</h1>
        <h1 className='text-[#29B2FF] font-extrabold text-2xl text-left mb-6'>Backend Developer</h1>
        <p className='text-white mb-8'>I am Sofware Enginer and Backend Developer</p>
        <div className='flex justify-between w-60 ml-0'>
          <button className='text-[#051426] bg-[#29B2FF] rounded py-2 px-4 '>Hire Me</button>
          <button className='text-[#29B2FF] border border-customBlue rounded py-2 px-4'>Let's Talk</button>
        </div>
        <SocialMediaIcons />
      </div>
      <div className='flex items-center justify-center'>
        <img src="/abdi.png" alt="Profile" className="rounded-full shadow-lg w-[300px] h-[302px]"/>
      </div>
    </div>
  );
}

export default Home;
