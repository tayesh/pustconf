import React from 'react';
import { motion } from 'framer-motion';


const Day2 = () => {
    const conferenceSchedule = [
        {

            time: "07:30 AM - 08:00 AM",
            event: "Kit Collection"
        },
        {

            time: "08:00 AM - 08:30 AM",
            event: "Breakfast"
        },
        {

            time: "08:30 AM - 10:00 AM",
            event: "Technical Sessions-3"
        },
        {

            time: "10:20 AM - 11:20 AM",
            event: "Keynote Session - 5"
        },
        {

            time: "11:20 AM - 11:40 AM",
            event: "Invited Talk"
        },
        {

            time: "11:40 AM - 12:20 PM",
            event: "Snacks"
        },
        {

            time: "12:20 PM - 01:00 PM",
            event: "Keynote Session - 6"
        },
        {

            time: "01:00 PM - 02:00 PM",
            event: "Keynote Session - 7"
        },
        {

            time: "02:00 PM - 03:00 PM",
            event: "Poster Session - D2P2"
        },
        {

            time: "03:00 PM - 03:40 PM",
            event: "Lunch & Prayer Break"
        },
        {

            time: "03:40 PM - 04:20 PM",
            event: "Technical Sessions - 4"
        },
        {

            time: "04:20 PM - 04:50 PM",
            event: "Reserve Session"
        },
        {

            time: "04:50 PM - 06:00 PM",
            event: "Prayer & Refreshment Break"
        },
        {

            time: "06:00 PM - 06:30 PM",
            event: "Poster Session - D2P3"
        },
        {

            time: "06:30 PM - 07:00 PM",
            event: "Closing & Award Ceremony"
        }
    ];



    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };
    return (

        <motion.div
            className='w-[60%] mx-auto my-10 grid grid-cols-10'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {conferenceSchedule.map((item, index) => (
                <React.Fragment key={index}>
                    {/* Timeline column */}
                    <motion.div
                        className='col-span-1 w-full relative flex justify-center items-center'
                        variants={itemVariants}
                    >
                        {/* Circle */}
                        <motion.div
                            className='w-5 h-5 bg-white rounded-full border-4 relative z-20 border-[#923330]'
                            whileHover={{ scale: 1.2 }}
                        />

                        {/* Vertical line */}
                        {index !== conferenceSchedule.length - 1 ? (
                            <div className='absolute w-1 h-full z-10 bg-[#923330] left-[50%] translate-x-[-50%] top-5' />
                        ) : (
                            <div className='absolute w-1 h-[50%] z-10 bg-[#923330] left-[50%] translate-x-[-50%] top-5' />
                        )}
                    </motion.div>

                    {/* Content column */}
                    <motion.div
                        className='col-span-9 p-5'
                        variants={itemVariants}
                    >
                        <motion.div
                            className='rounded-xl shadow-[3px_4px_8px] shadow-gray-600 flex justify-between items-center px-5 py-4'
                            whileHover={{ scale: 1.02, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
                        >
                            <p className='text-xl text-slate-600 font-bold'>{item.time}</p>
                            <motion.p
                                className='text-xl px-5 py-2 rounded-lg bg-[#92333033] text-[#923330] font-bold'
                                whileHover={{ scale: 1.05 }}
                            >
                                {item.event}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </React.Fragment>
            ))}
        </motion.div>
    );
};

export default Day2;