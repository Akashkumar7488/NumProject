import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NavigationButtons = ({ prevPage, nextPage }) => {
  const navigate = useNavigate();

  return (
    <div className="navigation-buttons -mt-80">
      {prevPage && (
        <button onClick={() => navigate(prevPage)} className='nav-button bg-blue-600'>
          <FaArrowLeft /> Prev
        </button>
      )}
      {nextPage && (
        <button onClick={() => navigate(nextPage)} className='nav-button bg-blue-600'>
          Next <FaArrowRight />
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
