import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-17.5 pl-4 md:pl-6 lg:pl-8 xl:pl-10 pr-6 md:pr-10 lg:pr-24 xl:pr-32 flex items-center justify-between z-20 border-2 border-gray-200 backdrop-blur-md text-black shadow-[0px_4px_25px_0px_#0000000D] rounded-full transition-all">
      <a href="https://github.com/JustChiwo" className="text-cyan-500 text-2xl">
        Chiwo
      </a>

      <ul className="md:flex hidden items-center gap-10">
        <li>
          <a className="hover:text-gray-300 transition" href="#Home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-gray-300 transition" href="#About">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-gray-300 transition" href="#Projects">
            Projects
          </a>
        </li>
        <li>
          <a className="hover:text-gray-300 transition" href="#Contact">
            Contact
          </a>
        </li>
      </ul>

      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="menu-btn inline-block md:hidden active:scale-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#999"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </button>

      <div
        className={`mobile-menu absolute top-full left-1/2 -translate-x-1/2 w-full bg-gray-100/95 border backdrop-blur-md text-black p-6 rounded-2xl mt-2 ${isOpen ? "block" : "hidden"} md:hidden`}
      >
        <ul className="flex flex-col space-y-4 text-lg">
          <li>
            <a href="#Home" className="text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="text-sm">
              About
            </a>
          </li>
          <li>
            <a href="#Projects" className="text-sm">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" className="text-sm">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
