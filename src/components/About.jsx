import myImage from "../assets/Chiwo.jpeg";

function About() {
  return (
    
    <div
      id="About"
      className="flex flex-col md:flex-row items-center justify-between gap-10 pl-10 pr-10 pt-10"
    >
      {/* Left column - text content */}
      <div className="flex-1">
        <h2 className="text-center md:text-left text-3xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-xl text-slate-900">
          A deep dive into Chiwo
        </h2>
        <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-2">
          Im a young and ambitious software Developer with a passion for
          creating working solutions. I have a stong understanding of
          programming and hardware, and a keen interest in exploring new
          technologies. My goal is to create meanningfull solutions and to be
          remembered as an innovative and impactful developer.
        </p>
        <br />
        <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-2">
          When I'm not coding, you'll find me exploring new technologies,
          reading tech blogs, tinkering with hardware projects or playing with
          cars
        </p>
        <div className="flex items-center gap-4 mt-8 text-sm">
          <button className="bg-cyan-600 hover:bg-black text-white active:scale-95 rounded-md px-7 h-11">
            Projects
          </button>
          <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-md px-6 h-11">
            Contact Me
          </button>
        </div>
      </div>

      {/* Right column - image */}
      <div className="flex-1">
        <img
          src={myImage}
          alt="Chiwo"
          className="w-full max-w-md rounded-3xl object-cover"
        />
      </div>
    </div>
  );
}

export default About;
