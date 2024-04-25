import React from 'react';

const Buttons = ({ handlePrev, handleNext }) => {
  return (
    <div className='center-button flex justify-center items-center gap-8'>
      <button
        className='py-2 px-4 bg-gray-800 text-white  rounded-md'
        onClick={handlePrev}
      >
        Prevous
      </button>
      <button
        className='py-2 px-4 bg-gray-800 text-white  rounded-md'
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;
