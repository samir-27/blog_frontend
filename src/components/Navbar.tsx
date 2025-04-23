import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "Posts", "Contact"];

  return (
    <nav className="bg-gray-900 text-white w-full fixed top-0 left-0 z-50 shadow ">
      <div className="container mx-auto sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-2xl font-bold">QuickPost</div>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-gray-300">
              {link}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="block text-white hover:text-gray-300">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
