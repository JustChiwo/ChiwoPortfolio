function Home() {
  return (
    <div>
      <h5 class="text-4xl md:text-7xl font-medium max-w-850px text-center mx-auto mt-30">
        Hi there, I'm <span class="text-cyan-600">Chiwo</span>
      </h5>

      <p class="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2">
        Endlessly curious, occasionally distracted, and turning it all into
        code.
      </p>
      <div class="mx-auto w-full flex items-center justify-center gap-3 mt-4">
        <button class="bg-cyan-700 hover:bg-black text-white px-6 py-3 rounded-full font-medium transition">
          My Projects
        </button>
        <button class="flex items-center gap-2 border border-slate-300 hover:bg-slate-200/30 rounded-full px-6 py-3">
          <span>Get In Touch</span>
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25.5 4.75 4l-3.5 3.5"
              stroke="#050040"
              stroke-opacity=".4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Home;
