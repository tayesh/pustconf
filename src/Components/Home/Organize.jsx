import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Organize = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-[40vh] flex items-center justify-center py-12 px-4 sm:px-8 bg-gradient-to-b from-[#f9f9f9] to-[#fff]"
    >
      <div className="max-w-4xl w-full text-center">
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase tracking-wider"
        >
          Organizer
        </motion.h2>
        
        <motion.div
          variants={itemVariants}
          className="divider divider-error w-20 h-1 my-4 mx-auto"
        />
        
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-[#923330] mt-6 mb-3"
        >
          Faculty of Engineering and Technology
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 font-medium mb-8"
        >
          Pabna University of Science and Technology, Pabna
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex justify-center"
        >
          <div className="flex gap-4">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  delay: 0.3 + item * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                className="h-3 w-3 rounded-full bg-[#923330]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Organize;