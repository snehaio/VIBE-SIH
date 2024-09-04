import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="text-white text-2xl font-bold">V.I.B.E.</div>
      <div className="space-x-6 text-white">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About Us</a>
        <a href="#" className="hover:text-gray-300">Destinations</a>
        <a href="#" className="hover:text-gray-300">Packages</a>
        <a href="#" className="hover:text-gray-300">Blog</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
      <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600">Book Now</button>
    </nav>
  );
}

export default Navbar;
