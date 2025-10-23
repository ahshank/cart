import React from 'react';
import logo from "../assets/vcart logo.png";

function Footer() {
  return (
    <footer className="w-full bg-[#f0f9f9] text-gray-800">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center py-10 px-5 md:px-10 gap-8">
        
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="OneCart Logo" className="w-10 h-10 md:w-12 md:h-12"/>
            <h2 className="text-2xl font-bold">OneCart</h2>
          </div>
          <p className="text-sm md:text-base text-gray-700 hidden md:block">
            OneCart is your all-in-one online shopping destination, offering top-quality products, unbeatable deals, and fast delivery—all backed by trusted service designed to make your life easier every day.
          </p>
          <p className="text-sm md:hidden text-gray-700">
            Fast. Easy. Reliable. OneCart Shopping
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-4 md:w-1/4 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold">Company</h3>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-teal-500 cursor-pointer hidden md:block">Home</li>
            <li className="hover:text-teal-500 cursor-pointer">About Us</li>
            <li className="hover:text-teal-500 cursor-pointer hidden md:block">Delivery</li>
            <li className="hover:text-teal-500 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 md:w-1/4 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold">Get in Touch</h3>
          <ul className="flex flex-col gap-1">
            <li className="hover:text-teal-500 cursor-pointer">+91-8102174761</li>
            <li className="hover:text-teal-500 cursor-pointer">contact@onecart.com</li>
            <li className="hover:text-teal-500 cursor-pointer hidden md:block">+1-123-456-7890</li>
            <li className="hover:text-teal-500 cursor-pointer hidden md:block">admin@onecart.com</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300"></div>

      {/* Bottom Section */}
      <div className="w-full bg-[#e0f7f7] text-gray-700 text-center py-3 text-sm md:text-base">
        © 2025 OneCart. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
