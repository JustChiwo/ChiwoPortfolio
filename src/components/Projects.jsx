import img from "../assets/BennettTea.jpg";
import img2 from "../assets/gearHeads.jpg";
import img3 from "../assets/privateSolutions.jpg";
function Projects() {
  return (
    <>
      
      <h2 className="text-3xl font-semibold text-center mx-auto">
        My Projects
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
          <img className="rounded-xl" src={img3} alt="Private Solutions" />
          <h3 className="text-base text-slate-900 font-medium mt-3">
            Private Solutions: A website for a promotion company.
          </h3>
          <p className="text-xs text-indigo-600 font-medium mt-1">
            React, TailwindCSS, Node.js,
          </p>
        </div>
        <div className="max-w-80 w-full hover:-translate-y-0.5 transition duration-300">
          <img className="rounded-xl" src={img} alt="Bennett Tea" />
          <h3 className="text-base text-slate-900 font-medium mt-3">
            Bennett Tea: A website for a tea company.
          </h3>
          <p className="text-xs text-indigo-600 font-medium mt-1">HTML, CSS,</p>
        </div>
        <div className="max-w-80 w-full hover:-translate-y-0.5 transition duration-300">
          <img className="rounded-xl" src={img2} alt="Gear Heads" />
          <h3 className="text-base text-slate-900 font-medium mt-3">
            Gear Heads: A Quiz app for car enthusiasts.
          </h3>
          <p className="text-xs text-indigo-600 font-medium mt-1">
            HTML, CSS, JavaScript,
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
