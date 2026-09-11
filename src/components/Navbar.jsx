
function Navbar() {
  return (
    <nav class="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      <a href="https://github.com/JustChiwo" class="text-cyan-600 text-2xl">
        Chiwo
      </a>

      <ul class="md:flex hidden items-center gap-10">
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            Projects
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            Contact
          </a>
        </li>
      </ul>

      <button
        aria-label="menu-btn"
        type="button"
        class="menu-btn inline-block md:hidden active:scale-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#000"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </button>

      <div class="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 hidden md:hidden">
        <ul class="flex flex-col space-y-4 text-lg">
          <li>
            <a href="#" className="text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              About Me
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
