import React from "react";
import { FaSearch } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { useImageContext } from "./ImageContext";

function Navigation() {
  const { image } = useImageContext();
  return (
    <>
      <nav className="bg-white text-gray-800 shadow-md flex justify-between items-center px-4 py-3">
        <div className="flex items-center ">
            <div>
          <img src={image || "https://media.istockphoto.com/id/1186376822/vector/hand-made-with-love-inscription-lettering-quote-made-with-love-calligraphy-made-with-love.jpg?s=612x612&w=0&k=20&c=2Vh2xfShMPvfbPgi-rAqR-MXUSvc4it6b1fc_YGYVTU="} alt="Logo" className="w-12 h-12 mr-2" />
          </div>
          
        </div>
        <div className="flex items-center gap-5">
          <ul className="flex space-x-16">
            <li>
              <a href="#" className="font-medium hover:text-gray-500">
                Inspiration 
              </a>
            </li>
            <li>
              <a href="#"  className= "font-medium hover:text-gray-500">
                Find Work
              </a>
            </li>
            <li>
              <a href="#" className="font-medium hover:text-gray-500">
                Go Pro
              </a>
            </li>
            <li>
              <a href="#" className="font-medium hover:text-gray-500">
                Hire Designers
              </a>
            </li>
          </ul>
          <div className="relative">
                    <input type="text" placeholder="Search..." className="bg-gray-200 text-black py-2 pl-8 pr-3 rounded-full focus:border-gray-300"/>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 pointer-events-none">
                        <FaSearch />
                    </div>
                </div>
                <FaBriefcase className="text-3xl text-gray-500"/>
          <div className="ml-4">
          
            <img
              src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=1"
              alt="Profile Photo"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <button  type="button" className="block mx-auto py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-pink-500 border border-gray-400 rounded-lg hover:bg-pink-300">
          Upload
        </button>
        </div>
        
      </nav>
    </>
  );
}

export default Navigation;
