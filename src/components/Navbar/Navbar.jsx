import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='p-9 bg-gray-100 text-gray-700'>
      <ul className='flex justify-end item-center gap-8'>
        <Link to={'/'} className='text-xl'>
          Home
        </Link>
        <Link to='/Complete' className='text-xl'>
          Survey Results
        </Link>

        <Link className='text-xl'>Recommendation</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
