import personalSite from "../../assets/imgs/personal-site.png";

let projects = [
  {
    title: "Personal Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    techStack: ["REACT", "TAILWIND"],
    image: personalSite,
  },
  {
    title: "Another Project",
    description: "lorem ipsum",
    techStack: ["REACT"],
  },
  {
    title: "Another Project",
    description: "lorem ipsum",
    techStack: ["REACT", "NEXT", "TAILWIND", "CONTEXT API"],
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-[4rem] lg:max-w-[50%] px-[5vw] py-[1rem]"
    >
      <h2 className="text-slate-50 text-center font-medium text-3xl">
        Projects
      </h2>
      {projects.map((project, index) => (
        <div key={index}>
          <div className="bg-gray-700 rounded-lg gap-[2rem] p-[1rem] flex flex-col">
            <h3 className="font-bold text-slate-50 text-2xl lg:text-3xl">
              {project.title}
            </h3>
            <p className="text-stone-300 font-medium leading-[1.6rem]">
              {project.description}
            </p>
            <ul className="flex gap-2 flex-wrap">
              {project.techStack.map((tech, index) => (
                <li
                  key={index}
                  className="text-stone-200 font-medium bg-slate-800 text-md py-[0.3rem] px-[0.3rem] lg:py-2 lg:px-4 rounded-lg"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <img
              className="position relative rounded-xl hidden md:block"
              src={project.image}
            ></img>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="text-slate-50 bg-[#000000a8] px-5 py-3 rounded-md">
                Live Demo &rarr;
              </button>
              <div className="flex items-center justify-center gap-1 text-slate-50 bg-[#000000a8] px-5 py-3 rounded-md">
                <button>Code </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
