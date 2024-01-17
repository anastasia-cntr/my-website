let techlist = [
  { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
  { name: "JAVASCRIPT", icon: "https://skillicons.dev/icons?i=javascript" },
  { name: "TAILWIND", icon: "https://skillicons.dev/icons?i=tailwind" },
  { name: "REACT", icon: "https://skillicons.dev/icons?i=react" },
];

export default function TechStack() {
  return (
    <div className="flex flex-col items-center justify-center gap-[2rem] pt-[2rem] border-t-[2px] text-slate-50">
      <h2 className="font-bold text-xl md:text-3xl  md:font-medium">
        My toolbox
      </h2>
      <ul className="flex gap-[2rem] text-xl flex-col md:flex-row">
        {techlist.map((tech, index) => (
          <li className="hover:scale-125" key={index}>
            <img src={tech.icon ? tech.icon : null} alt={`Tech ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
