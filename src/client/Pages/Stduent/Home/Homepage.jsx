
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Homepage = () => {
  
   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  
    const handleClick = () => {
   
    };
  return (
    <div className="flex justify-around">
      {/* Homepage Card */}
      <div className="flex items-center justify-center h-screen ">
        <div className="relative w-full sm:w-96 md:w-120 h-80 overflow-hidden bg-white shadow-md rounded-md border-4 rounded-xl">
          <div className="h-1/2 bg-blue-500 clip-ellipse relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full overflow-hidden transition-transform duration-300 hover:scale-110">
              <img className="w-full h-full object-cover" src="https://logowik.com/content/uploads/images/student5651.jpg" alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center p-4 ">
            <h2 className="text-lg font-semibold text-center">Student Bus Pass</h2>
            <p className="text-gray-600 text-center">Click here to apply for Bus Pass.</p>
            {/* Button */}
           
            <NavLink className=" text-center mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300" to="/Student">
            <button >
              Apply
            </button>
            </NavLink>
           
          </div>
        </div>
      </div>

      {/* Employee Card */}
      
    </div>






  )
}

export default Homepage
