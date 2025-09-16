import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Show button only when scrolled down more than 300px
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const quickLinks = [
    { name: "Call for Paper", url: "/call-for-paper" },
    { name: "Registration", url: "/registration" },
    { name: "Scopes", url: "/scopes" },
    { name: "Contact", url: "/contact" }
  ];

  const developers = [
    {
      name: "Shahriar Siddique Arjon",
      role: "Dept of CSE, PUST",
      image: "https://i.ibb.co/M5JV0ht3/Whats-App-Image-2025-07-24-at-11-48-02-72578c25.jpg",
      portfolio: "https://arjon-portfolio.netlify.app/",
      bio: "Full Stack Developer with expertise in React and Node.js"
    },
    {
      name: "Ittihad Hasnat",
      role: "Dept of CSE, PUST",
      image: "https://i.ibb.co/QvqRRBj6/Whats-App-Image-2025-07-24-at-11-54-19-64bd512a.jpg",
      portfolio: "https://ittihadhasnat.netlify.app/",
      bio: "Full Stack Developer with expertise in React and Node.js"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#92333000] to-[#92333074] pt-10 relative">
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#923330] text-white p-3 rounded-full shadow-lg z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }} // Optional: Smooth exit animation
          whileHover={{ scale: 1.1, backgroundColor: "#7a2a28" }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}

      <div className="container mx-auto px-4">
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 lg:w-[80%] w-[90%] mx-auto rounded-lg overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6556.608088403832!2d89.27858263176462!3d24.01284570919826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84f0ec23a72b%3A0x775d6cd53cbdad8b!2sPabna%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbd!4v1747087446973!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 w-full"
        >
          <h3 className="text-2xl w-fit mx-auto lg:px-36 py-2 font-bold mb-6 border-b-2 text-center text-[#923330]">QUICK NAVIGATION</h3>
          <div className="flex lg:flex-row flex-col flex-wrap justify-center items-center gap-6">
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.url}
                className="px-4 py-2 text-white bg-[#923330] hover:bg-gray-800 rounded-md transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-6 px-12 border-t border-white text-center lg:flex justify-between items-center"
        >
          <p className="mb-2">
            Copyright © 2026 Faculty of Engineering and Technology, PUST
          </p>
          <p
            className="relative inline-flex items-center gap-1 text-md font-semibold text-gray-800 cursor-pointer group"
            onClick={() => setIsPopupOpen(true)}
          >
            <span className="text-gray-700 group-hover:text-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            <span className="relative z-10">
              Developer Info
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span className="text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </p>
        </motion.div>

        {/* Developer Info Popup */}
        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsPopupOpen(false)}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-[500px] w-full p-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              variants={popupVariants}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#923330]">Development Team</h3>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {developers.map((dev, index) => (
                  <motion.div
                    key={index}
                    className="rounded-xl p-6 flex justify-between shadow-[inset_0_2px_4px_0_rgba(75,25,23,0.7)] bg-[#92333051] items-start border-2 border-[#92333066]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="w-28 rounded-lg shadow-[2px_2px_4px_0_rgba(75,25,23,0.7)] object-cover mb-4"
                    />
                    <div className='text-end max-w-[60%]'>
                      <h4 className="text-xl font-bold text-[#923330]" style={{ textShadow: '1px 1px 2px rgba(75, 25, 23, 0.3)' }}>
                        {dev.name}
                      </h4>
                      <p className="text-white/90 mb-2" style={{ textShadow: '1px 1px 2px rgba(75, 25, 23, 0.3)' }}>
                        {dev.role}
                      </p>
                      <p className="text-gray-600 mb-4" style={{ textShadow: '1px 1px 2px rgba(75, 25, 23, 0.3)' }}>
                        {dev.bio}
                      </p>
                      <a
                        href={dev.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 shadow-[2px_2px_4px_0_rgba(75,25,23,0.7)] bg-white text-[#923330] rounded hover:bg-[#7a2a28] hover:text-white transition-colors mt-auto"
                      >
                        View Portfolio
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      <div className="text-xl text-center space-y-5 px-[10%]">
        <h2>This conference uses Microsoft CMT for the submission and review process.</h2>
        
      </div>
    </footer>
  );
};

export default Footer;