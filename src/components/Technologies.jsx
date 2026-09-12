import git from "../assets/git.svg";
import html from "../assets/html-5.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";

function Technologies() {
  return (
    <div id="Technologies" className="mt-10 py-10 px-10">
      <h2 className="text-3xl font-semibold text-center mx-auto">
        My Tech stack
      </h2>
      <div className="mt-15 flex flex-wrap justify-center gap-12 mb-10">
        <img className="h-20 w-20 " src={html} alt="HTML" />

        <img className="h-20 w-20 " src={css} alt="CSS" />
        <img className="h-20 w-20 " src={js} alt="JavaScript" />
        <img className="h-20 w-20 " src={react} alt="React" />
        <img className="h-20 w-20 " src={tailwind} alt="Tailwind CSS" />
        <img className="h-20 w-20 " src={git} alt="Git" />
      </div>
    </div>
  );
}

export default Technologies;
