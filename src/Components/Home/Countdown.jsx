import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const conferenceDate = new Date('April 4, 2026 00:00:00').getTime();
            const now = new Date().getTime();
            const difference = conferenceDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial calculation

        return () => clearInterval(timer);
    }, []);

    // Animation variants
    const countdownItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
            }
        })
    };

    return (
        <div className="py-10 px-4 sm:px-6  lg:px-8 text-[#923330]">
            <div className="max-w-5xl mx-auto text-center">
                <div className="grid grid-cols-4 lg:gap-4 gap-1  mx-auto">
                    {Object.entries(timeLeft).map(([unit, value], index) => (
                        <motion.div
                            key={unit}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={countdownItemVariants}
                            className="relative bg bg-gradient-to-b from-[#923330] to-[#9e5553ec] text-white rounded-lg lg:py-8 py-4 lg:px-4 min-w-[70px] max-w-[150px] 
                     border border-[#923330]/20
                     shadow-[inset_0_2px_4px_0_rgba(75,25,23,0.7)]
                     hover:shadow-[inset_0_4px_8px_0_rgba(75,25,23,0.7]
                     transition-all duration-300"
                        >
                            {/* Inner shadow overlay */}
                            <div className="absolute inset-0 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 shadow-[inset_0_0_8px_0_rgba(146,51,48,0.2)]"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-white">
                                    {value.toString().padStart(2, '0')}
                                </div>
                                <div className="text-[12px] uppercase text-center lg:tracking-wider text-white/80">
                                    {unit}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="mt-8 text-base sm:text-lg font-medium text-[#923330]"
                >
                    {timeLeft.days <= 0 &&
                        timeLeft.hours <= 0 &&
                        timeLeft.minutes <= 0 &&
                        timeLeft.seconds <= 0 ? (
                        "The conference has begun!"
                    ) : (
                        <span className="inline-block  px-8 py-2 bg-gradient-to-r from-[#923330]/0 via-[#923330]/10 to-[#923330]/0 border-b-2 border-t-2 border-[#923330]/20">
                            We look forward to seeing you there!
                        </span>
                    )}
                </motion.div>
            </div>
        </div>

    );
};

export default Countdown;