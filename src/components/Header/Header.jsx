import { motion } from "framer-motion";

const buttons = [
  { name: "Home", href: "#home" },
  { name: "About me", href: "#about-me" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="z-[2] relative">
      <motion.div
        className="fixed top-0 left-1/2 right-1/2 w-full rounded-none border border-[#0000005e] border-opacity-40 bg-[#090e19e7] shadow-lg shadow-black/[0.03] backdrop-blur-[1px] sm:top-6 sm:w-[23rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="flex items-center justify-center">
          <ul
            className="
            flex flex-wrap items-center justify-around gap-4 font-medium text-gray-400 sm:w-[initial] sm:flex-nowrap sm:gap-4 py-2 text-base"
          >
            {buttons.map((button, index) => (
              <motion.li
                key={index}
                className="flex px-2 py-1 hover:text-gray-100 hover:bg-slate-900 hover:rounded-full"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <a href={button.href}>{button.name}</a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
