import React from 'react';
import { FaCalendar } from 'react-icons/fa';

function Education() {
  return (
    <div className='bg-[#051426] h-screen flex-col'>
      <h1 className='pt-32 text-white font-extrabold text-4xl flex justify-center'>My<h1 className='text-customBlue ml-4'>Journey</h1></h1>
      <div className='flex  pt-16'>
        <div className='text-white text-2xl font-extrabold mt-10 flex-col ml-44'>
          <div className='w-3 h-3 border border-lightBlue bg-lightBlue rounded-full '></div>
          <div className=' h-40 w-customWidth border border-lightBlue bg-lightBlue ml-1'></div>
          <div className='w-3 h-3 border border-lightBlue bg-lightBlue rounded-full '></div>
          <div className=' h-36 w-customWidth border border-lightBlue bg-lightBlue ml-1'></div>
        </div>
        <div className='ml-8'>
          <h1 className='text-white text-xl font-bold pb-4'>Education</h1>
          <div className='flex-col border border-lightBlue h-40 w-96 rounded-xl'>
            <div className='flex p-2 pl-12'>
              <FaCalendar size={16} className="text-lightBlue mt-1" />
              <h3 className='ml-2 text-lightBlue'>2021 - 2023</h3>
            </div>
            <p className='text-white pl-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati ipsam assumenda ducimus nam, recusandae quidem ratione, a laudantium inventore explicabo. A consequatur quisquam dolores aut voluptatibus</p>
          </div>
          <div className='flex-col border border-lightBlue h-40 w-96 rounded-xl mt-6'>
            <div className='flex p-2 pl-12'>
              <FaCalendar size={16} className="text-lightBlue mt-1" />
              <h3 className='ml-2 text-lightBlue'>2021 - 2023</h3>
            </div>
            <p className='text-white pl-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati ipsam assumenda ducimus nam, recusandae quidem ratione, a laudantium inventore explicabo. A consequatur quisquam dolores aut voluptatibus</p>
          </div>
        </div>
        <div className='text-white text-2xl font-extrabold mt-10 flex-col ml-36'>
          <div className='w-3 h-3 border border-lightBlue bg-lightBlue rounded-full '></div>
          <div className=' h-40 w-customWidth border border-lightBlue bg-lightBlue ml-1'></div>
          <div className='w-3 h-3 border border-lightBlue bg-lightBlue rounded-full '></div>
          <div className=' h-36 w-customWidth border border-lightBlue bg-lightBlue ml-1'></div>
        </div>
        <div className='ml-8'>
          <h1 className='text-white text-xl font-bold pb-4'>Experience</h1>
          <div className='flex-col border border-lightBlue h-40 w-96 rounded-xl'>
            <div className='flex p-2 pl-12'>
              <FaCalendar size={16} className="text-lightBlue mt-1" />
              <h3 className='ml-2 text-lightBlue'>2021 - 2023</h3>
            </div>
            <p className='text-white pl-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati ipsam assumenda ducimus nam, recusandae quidem ratione, a laudantium inventore explicabo. A consequatur quisquam dolores aut voluptatibus</p>
          </div>
          <div className='flex-col border border-lightBlue h-40 w-96 rounded-xl mt-6'>
            <div className='flex p-2 pl-12'>
              <FaCalendar size={16} className="text-lightBlue mt-1" />
              <h3 className='ml-2 text-lightBlue'>2021 - 2023</h3>
            </div>
            <p className='text-white pl-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati ipsam assumenda ducimus nam, recusandae quidem ratione, a laudantium inventore explicabo. A consequatur quisquam dolores aut voluptatibus</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;