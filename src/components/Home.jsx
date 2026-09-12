function Home() {
  return (
    <div id="Home" className="min-h-screen scroll-mt-[100px]">
      <h5 className="text-4xl md:text-7xl font-medium max-w-850px text-center mx-auto mt-30">
        Hi there, I'm <span className="text-cyan-600">Chiwo</span>
      </h5>

      <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2">
        Somehow I turn curiosity into Code.
      </p>
      <div className="mx-auto w-full flex items-center justify-center gap-3 mt-4">
        <button className="bg-cyan-700 hover:bg-black text-white px-6 py-3 rounded-full font-medium transition">
          <a href="#Projects">My Projects</a>
        </button>
        <button className="flex items-center gap-2 border border-slate-300 hover:bg-slate-200/30 rounded-full px-6 py-3 break-after-page">
          <a href="#Contact">Get in Touch</a>
        </button>
      </div>
    </div>
  );
}

export default Home;
