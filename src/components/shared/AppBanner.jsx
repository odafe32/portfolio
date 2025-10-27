import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
    >
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 text-left">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="font-general-semibold text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left text-ternary-dark dark:text-primary-light"
        >
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            Godfrey Joseph
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          A{" "}
          <span className="font-semibold text-indigo-500 dark:text-indigo-400">
            Full-Stack Developer
          </span>{" "}
          with a passion for crafting scalable web and mobile applications that
          blend{" "}
          <span className="text-purple-500 font-medium">performance</span> and{" "}
          <span className="text-purple-500 font-medium">beautiful design</span>.
          I love turning complex ideas into smooth digital experiences.
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.4 }}
          className="font-general-regular mt-4 text-base md:text-lg text-center sm:text-left text-gray-400 dark:text-gray-300"
        >
          Currently building modern solutions using{" "}
          <span className="text-indigo-500">Laravel</span>,{" "}
          <span className="text-indigo-500">React</span>,{" "}
          <span className="text-indigo-500">React Native</span>, and{" "}
          <span className="text-indigo-500">TypeScript</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.6 }}
          className="flex justify-center sm:justify-start"
        >
          <a
            download="Godfrey-Joseph-CV.pdf"
            href="/files/Godfrey-Joseph-CV.pdf"
            className="font-general-medium flex justify-center items-center w-40 sm:w-48 mt-10 text-lg border border-indigo-300 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-gray-600 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-lg font-general-medium">
              Download CV
            </span>
          </a>
        </motion.div>
      </div>

      {/* Right Developer Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.3 }}
        className="w-full sm:w-1/2 text-right float-right mt-10 sm:mt-0"
      >
        <img
          src="dp.png"
          alt="Godfrey Joseph - Full Stack Developer"
          className="w-full max-w-md mx-auto sm:mx-0 rounded-2xl shadow-lg"
        />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
