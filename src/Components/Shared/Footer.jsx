import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: "Call for Paper", url: "/call-for-paper" },
    { name: "Registration", url: "/registration" },
    { name: "Submission", url: "/submission" },
    { name: "Contact", url: "/contact" }
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

  return (
    <footer className=" bg-gradient-to-b from-[#92333000] to-[#92333074]  pt-10">
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
                className="px-4 py-2 text-white  bg-[#923330] hover:bg-gray-800 rounded-md transition-colors duration-300"
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
          className="py-6 border-t border-white text-center"
        >
          <p className="mb-2">
            Copyright © 2024 Faculty of Engineering and Technology, PUST
          </p>
          <p className="text-sm font-medium text-gray-200">
            Design and Developed by Shahriar Siddique Arjon and Ittihad Hasnat, Dept of CSE, PUST
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;