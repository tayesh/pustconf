import React from "react";
import Marquee from "react-fast-marquee";
import { FaCalendarAlt, FaExclamationTriangle, FaClock } from "react-icons/fa";

const Marque = () => {
    const marqueeItems = [
        {
            icon: <FaClock className="h-5 w-5 mr-2 " />,
            text: "Paper Submission: January 01, 2026",
            color: "#751916"
        },
        {
            icon: <FaCalendarAlt className="h-5 w-5 mr-2" />,
            text: "Conference Date: April 04-05, 2026",
            color: "#751916"
        },
        {
            icon: <FaExclamationTriangle className="h-5 w-5 mr-2" />,
            text: "Note: All submissions subject to rigorous peer-review process and standard APCs",
            color: "#751916"
        }
    ];

    return (
        <div className="py-4  bg-white shadow-lg border-b border-gray-200 overflow-hidden">
            <Marquee
                autoFill={true}
                gradient={true}
                gradientColor={[255, 255, 255]}
                gradientWidth={100}
                speed={50}
                className="text-[#75191648] font-bold text-xl "
            >
                <div className="flex items-center space-x-16 px-4 overflow-hidden">
                    {marqueeItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className="flex items-center overflow-hidden" style={{ color: item.color }}>
                                <span className="text-[#cb3f3ace]">{item.icon}</span>
                                <span className="text-[#cb3f3ad7]">{item.text}</span>
                            </span>
                            {index < marqueeItems.length - 1 && (
                                <span
                                    className="w-2 h-2 rounded-full opacity-80"
                                    style={{ backgroundColor: item.color }}
                                ></span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Marque;