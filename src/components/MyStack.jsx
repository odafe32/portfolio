import { motion } from "framer-motion";

const MyStack = () => {
  return (
    <motion.section
      id="my-stack"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 sm:py-24 bg-gray-50 dark:bg-ternary-dark"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-general-semibold text-3xl sm:text-4xl text-ternary-dark dark:text-primary-light mb-8">
          💻 My Stack
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          A collection of the technologies, frameworks, and tools I use to build
          robust web and mobile applications — from backend systems to frontend
          experiences, cloud, and design tools.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {/* Example Badges - You can paste all your shields here */}
          <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
          <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
          <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
          <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
          <img src="https://img.shields.io/badge/next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
          <img src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
          <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Native" />
          <img src="https://img.shields.io/badge/mongodb-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
          <img src="https://img.shields.io/badge/Astra%20DB-2D3748?style=for-the-badge&logo=datastax&logoColor=white" alt="Astra DB" />
          <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase" />
          <img src="https://img.shields.io/badge/aws-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
          <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
          <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
          <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
          <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
          <img src="https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white" alt="Photoshop" />
          <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
        </div>

        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          (This stack keeps evolving — I’m always exploring new technologies.)
        </p>
      </div>
    </motion.section>
  );
};

export default MyStack;
