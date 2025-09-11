import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Tracks = () => {
  // Track data
  const tracks = [
    {
      title: "Artificial Intelligence and Robotics",
      items: [
        "Machine Learning",
        "Neural Network",
        "Distributed and Cloud Computing",
        "Pattern Matching",
        "Fuzzy Logic",
        "Virtual Reality",
        "Robotics, Drones and Mechatronics",
        "Control Systems & Automation"
      ]
    },
    {
      title: "Biomedical Engineering",
      items: [
        "Biomedical Instrumentation",
        "Biosignal, Biomedical Imaging and Bioinformatics",
        "Solid, Fluid, and Cardiac Biomechanics and Biomaterials",
        "Rehabilitation Engineering",
        "Clinical Engineering and Healthcare System",
        "E-health"
      ]
    },
    {
      title: "Communication Technologies",
      items: [
        "Wireless and Optical Communication Systems",
        "Microwave and Radio Frequency",
        "Satellite and Space Communications",
        "Antenna, Microwave & RF Engineering",
        "Smart Grid Communications",
        "Power Line Communications",
        "Green Communication Systems",
        "MIMO Systems and Networks",
        "Generative and LLM based Approaches to Communications",
        "Mobile Communications 5G/6G and beyond",
        "Communication QOS, Reliability and Modeling"
      ]
    },
    {
      title: "Energy and Power Systems",
      items: [
        "Energy & AI",
        "Renewable Energy System",
        "Solar Cells",
        "Energy Storage and Conversion",
        "Electrical Machine & Drives",
        "Power System and Smart Grid",
        "Distributed Power Generation",
        "Power Transmission & Distribution",
        "Instrumentation and Measurement"
      ]
    },
    {
      title: "Networks and Security",
      items: [
        "Computer Networks and Security",
        "Optical Networks and Systems",
        "Cognitive Radio Networks",
        "Ad hoc and Sensor Networks",
        "Internet of Things",
        "Next Generation Networks",
        "Network & Cyber Security",
        "Smart Grid Security",
        "Software & Database Systems"
      ]
    },
    {
      title: "Photonics and Optoelectronic Devices",
      items: [
        "Electronic and Photonic Materials",
        "Lasers and Laser Applications",
        "LEDs, OLEDs and Display Devices",
        "Photonics Devices and Applications",
        "Nanophotonics and Plasmonics",
        "Sensor Technologies and Application"
      ]
    },
    {
      title: "Signal Processing and Multimedia Systems",
      items: [
        "Image and Video Processing",
        "Signal Processing Algorithms",
        "Speech and Audio Signal Processing",
        "Remote Sensing and Satellite Image Processing",
        "Multimedia Security and Systems",
        "Computer Vision"
      ]
    },
    {
      title: "VLSI, Embedded Systems, Materials & IC Fabrication",
      items: [
        "VLSI Circuits & Systems",
        "Embedded Systems and Applications",
        "VLSI Testing and Reliability",
        "Intelligent System & IoT",
        "System on Chip (SoC) Design",
        "Power Electronics and Drives",
        "Thin Film Technology",
        "Nanoelectronics & Nanotechnology",
        "Magnetic and Insulating Materials",
        "MEMS &NEMS",
        "Plasma Science and Engineering"
      ]
    }
  ];

  const [selectedTrack, setSelectedTrack] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [hoveredTrack, setHoveredTrack] = useState(null);

  // Auto-rotate tracks every 5 seconds
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setSelectedTrack((prev) => (prev + 1) % tracks.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [autoRotate, tracks.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      y: -3,
      backgroundColor: "rgba(146, 51, 48, 0.05)",
    },
  };

  const trackItemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.03,
      },
    }),
  };

  const handleTrackClick = (index) => {
    setSelectedTrack(index);
    setAutoRotate(false);
    setTimeout(() => setAutoRotate(true), 10000); // Re-enable auto-rotate after 15 seconds
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title with animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#923330]"
        >
          Conference Tracks
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-md md:text-lg mx-4 md:mx-16 text-center mb-12 text-gray-600"
        >
          ICERFEST-2026 welcomes original research contributions across all fields of Engineering, Science, and Technology. The scope of the conference includes but is not limited to the following areas:
        </motion.p>

        {/* Two-column layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mx-4 md:mx-8"
        >
          {/* Left column - Track titles */}
          <motion.div className="space-y-3">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => handleTrackClick(index)}

                className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${selectedTrack === index
                  ? "bg-[#923330] text-white shadow-md"
                  : " text-[#923330] bg-white"
                  }`}
              >
                <h3 className={`text-lg font-semibold `}>
                  {index + 1}. {track.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Right column - Selected track items */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 border border-[#923330]/20 h-full shadow-sm relative"
          >
            {/* Top accent border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#923330] to-[#d17a78] rounded-t-lg"></div>
            {/* <div className="my-2 flex items-center justify-end">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Auto-rotate: {autoRotate ? "On" : "Off"}</span>
                <div
                  className={`w-12 h-6 rounded-full p-1 cursor-pointer ${autoRotate ? 'bg-[#923330]' : 'bg-gray-300'}`}
                  onClick={() => setAutoRotate(!autoRotate)}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${autoRotate ? 'translate-x-6' : 'translate-x-0'}`}
                  />
                </div>
              </div>
            </div> */}

            <h3 className="text-2xl font-bold text-[#923330] mb-4">
              {selectedTrack + 1}. {tracks[selectedTrack].title}
            </h3>

            {/* List items */}
            <ul className="space-y-3">
              {tracks[selectedTrack].items.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={trackItemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-start group"
                >
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-[#923330] mt-0.5 mr-3 group-hover:scale-110 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 group-hover:text-[#923330] transition-colors">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Auto-rotate indicator */}

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tracks;