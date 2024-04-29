import React from 'react';
import Navbar from '../Navbar/Navbar';

const Complete = () => {
  return (
    <>
      <Navbar />
      <div className='p-8'>
        <h3 className='text-2xl text-bold text-center'>
          Survey has been completed
        </h3>

        <div className='results py-8'>
          <p className='px-4'>These are the results of Anime-con 2024</p>
        </div>
      </div>
    </>
  );
};

export default Complete;
