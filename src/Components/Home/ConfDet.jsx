import React, { useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUniversity, FaGlobe, FaBook, FaUsers } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ConfDet = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  const highlightVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="max-w-6xl mx-auto px-5 py-16 md:py-20"
    >
      {/* Conference Header */}
      <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wider text-[#923330] uppercase bg-[#923330]/10 rounded-full"
        >
          About The Event
        </motion.span>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          IEEE International Conference on<br />
          <span className="text-[#923330]">Q-PAIN 2025</span>
        </motion.h2>
        <motion.div
          className="w-20 h-1.5 bg-[#923330] mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
          A premier gathering of researchers and professionals advancing the frontiers of Quantum Photonics, Artificial Intelligence, and Networking technologies.
        </motion.p>
      </motion.div>

      {/* Key Information Cards - Icon Hover Version */}
      <motion.div
        variants={containerVariants}
        className="flex justify-center gap-8 sm:gap-12 mb-16 md:mb-20 flex-wrap"
      >
        {[
          {
            icon: <FaCalendarAlt className="text-4xl" />,
            title: "Dates",
            content: "August 1-2, 2025",
            subContent: "Mark your calendar"
          },
          {
            icon: <FaMapMarkerAlt className="text-4xl" />,
            title: "Venue",
            content: "Pabna University",
            subContent: "Pabna, Bangladesh"
          },
          {
            icon: <FaBook className="text-4xl" />,
            title: "Proceedings",
            content: "IEEE Xplore",
            subContent: "Scopus Indexed"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="relative group cursor-default"
          >
            {/* Icon Container */}
            <motion.div
              className="p-4 rounded-full bg-[#923330]/10 text-[#923330] flex items-center justify-center"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.div>

            {/* Details Card - Hidden by default */}
            <motion.div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white rounded-lg shadow-xl p-6 z-10 origin-top"
              variants={{
                rest: {
                  opacity: 0,
                  y: 10,
                  scale: 0.9,
                  transition: { duration: 0.2 }
                },
                hover: {
                  opacity: 1,
                  y: 15,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }
              }}
            >
              <h3 className="text-lg font-bold text-[#923330] mb-2">{item.title}</h3>
              <p className="text-gray-700 font-medium">{item.content}</p>
              {item.subContent && (
                <p className="text-gray-500 text-sm mt-1">{item.subContent}</p>
              )}
            </motion.div>

            {/* Tooltip Pointer */}
            <motion.div
              className="absolute top-full left-1/2 w-4 h-4 bg-white transform -translate-x-1/2 rotate-45 -mt-2 opacity-0 shadow-sm"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 }
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Conference Details */}
      <motion.div
        variants={containerVariants}
        className="bg-white rounded-xl shadow-md overflow-hidden mb-16 md:mb-20"
      >
        <div className="flex flex-col md:flex-row">
          <motion.div
            variants={highlightVariants}
            className="md:w-1/2 bg-gradient-to-br from-[#923330] to-[#b53f3c] p-8 md:p-10 flex items-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Conference Highlights</h3>
              <ul className="space-y-4">
                {[
                  { icon: <FaUsers className="text-sm" />, text: "500+ Expected Participants" },
                  { icon: <FaGlobe className="text-sm" />, text: "International Keynote Speakers" },
                  { icon: <FaUniversity className="text-sm" />, text: "Technical Sessions & Workshops" }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 bg-white/20 rounded-full p-1.5 mr-3">
                      {item.icon}
                    </span>
                    <span className="text-white">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">About Q-PAIN 2025</h3>
            <div className="space-y-5 text-gray-600">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                The IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking (Q-PAIN 2025) will be held at Pabna University of Science and Technology, Bangladesh from August 1-2, 2025.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Organized by the IEEE Photonics Society Bangladesh Chapter and technically sponsored by IEEE, this conference aims to bring together leading researchers, engineers, and scientists in the fields of quantum technologies, AI, and advanced networking.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Q-PAIN 2025 will feature keynote speeches by renowned international experts, technical paper presentations, poster sessions, and specialized workshops. All accepted and presented papers will be submitted for inclusion in IEEE Xplore Digital Library and indexed by Scopus.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        className="text-center bg-[#923330]/5 p-8 sm:p-10 rounded-xl border border-[#923330]/20"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Join Us?</h3>
        <motion.p
          className="max-w-2xl mx-auto text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Be part of this exciting event where innovation meets collaboration. Register now to secure your spot at Q-PAIN 2025.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(146, 51, 48, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#923330] text-white font-medium rounded-lg transition-all shadow-md"
        >
          Submit Paper
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default ConfDet;