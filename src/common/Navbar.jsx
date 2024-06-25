import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

function Navbar() {
  return (
    <nav className="bg-[#051426] p-8 flex fixed top-0 left-0 w-full">
      <ul className='flex-1 list-none justify-around'>
        <li className='text-white text-left font-black text-xl'>Abdi D.</li>
      </ul>
      <ul className='flex list-none justify-around'>
        <li><Link className='text-white pr-20 no-underline hover:text-[#29B2FF]' to="/">Home</Link></li>
        <li><Link className='text-white pr-20 no-underline hover:text-[#29B2FF]' to="/about">About</Link></li>
        <li><Link className='text-white pr-20 no-underline hover:text-[#29B2FF]' to="/education">Education</Link></li>
        <li><Link className='text-white pr-20 no-underline hover:text-[#29B2FF]' to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
