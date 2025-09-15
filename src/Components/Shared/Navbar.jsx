import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Add scroll effect to navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Scopes', path: '/scopes' },
        { name: 'Call for Paper', path: '/call-for-paper' },
        {
            name: 'Committees',
            path: '/committees',
            subItems: [
                { name: 'Patrons', path: '/committees?role=Patrons' },
                { name: 'International Advisory Committee', path: '/committees?role=International Advisory Committee' },
                { name: 'National Advisory Committee', path: '/committees?role=National Advisory Committee' },
                { name: 'General Chairs', path: '/committees?role=General Chairs' },
                { name: 'Organizing Chairs', path: '/committees?role=Organizing Chairs' },
                { name: 'Technical Program Chairs', path: '/committees?role=Technical Program Chairs' }
            ]
        },
        { name: 'Registration', path: '/registration' },
        // { name: 'Important Dates', path: '/important-dates' },
        // { name: 'Schedule', path: '/schedule' },
        {
            name: 'Authors',
            path: '/submission',
            subItems: [
                { name: 'Important Dates', path: '/submission-important-dates' },
                { name: 'Download Template', path: '/download-template' },
                { name: 'Paper Submission Guidelines', path: '/paper-submission-guidelines' },
                { name: 'Program Schedule', path: '/schedule' }
            ]
        },
        { name: 'Contact', path: '/contact' },
        {
            name: 'Others',
            subItems: [
                { name: 'Accomodation', path: '/accomodation' },
                { name: 'Tourists Attraction', path: '/tourists-attraction' }
            ]
        }
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    // Animation variants
    const navbarVariants = {
        scrolled: {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
        notScrolled: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            boxShadow: '0 0px 0px 0px rgba(0, 0, 0, 0)',
        }
    };

    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.05,
                when: "beforeChildren"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    // Helper function to render dropdown items
    const renderDropdownItems = (item) => {
        return item.subItems.map((subItem, subIndex) => (
            <motion.li
                key={subIndex}
                whileHover={{ scale: 1.02 }}
            >
                <a
                    href={item.name === 'Committees' 
                        ? `/committees?role=${encodeURIComponent(subItem.name)}` 
                        : subItem.path
                    }
                    className={` hover:bg-[#923330] hover:text-white ${isActive(subItem.path) ? 'bg-[#923330] text-white' : ''}`}
                >
                    {subItem.name}
                </a>
            </motion.li>
        ));
    };

    return (
        <motion.div
            className="sticky top-0 z-[100] bg-gradient-to-l from-[#923330d7] to-[#92333028]"
            initial="notScrolled"
            animate={isScrolled ? "scrolled" : "notScrolled"}
            variants={navbarVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="container mx-auto px-4 lg:px-6">
                <div className="navbar flex lg:justify-center lg:px-16">
                    

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-base flex items-center gap-2">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.subItems ? (
                                        <details>
                                            <summary className={`hover:text-[#923330] ${isActive(item.path) ? 'text-[#923330] ' : ''}`}>
                                                {item.name}
                                            </summary>
                                            <motion.ul
                                                className="bg-base-100 rounded-t-none p-2 shadow-lg whitespace-nowrap"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                style={{ width: 'max-content' }}
                                            >
                                                {renderDropdownItems(item)}
                                            </motion.ul>
                                        </details>
                                    ) : (
                                        <a
                                            href={item.path}
                                            className={`hover:text-[#923330] ${isActive(item.path) ? 'text-[#923330]' : ''}`}
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                        <button className='ml-10 btn mt-1.5 text-lg font-medium text-white bg-[#923330]'>Submit Paper</button>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="lg:hidden ">
                        <motion.button
                            className="btn btn-ghost btn-circle"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Open navigation menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </motion.button>
                    </div>

                    {/* Mobile Menu with animations */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden overflow-hidden"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={mobileMenuVariants}
                            >
                                <ul className="menu p-4 w-full">
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={navItemVariants}
                                        >
                                            {item.subItems ? (
                                                <details open>
                                                    <summary className={`hover:text-[#923330] ${isActive(item.path) ? 'text-[#923330] font-semibold' : ''}`}>
                                                        {item.name}
                                                    </summary>
                                                    <motion.ul
                                                        className="bg-base-100 p-2"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {renderDropdownItems(item)}
                                                    </motion.ul>
                                                </details>
                                            ) : (
                                                <motion.a
                                                    href={item.path}
                                                    className={`hover:bg-[#923330] hover:text-white ${isActive(item.path) ? 'bg-[#923330] text-white' : ''}`}
                                                    whileHover={{ x: 5 }}
                                                    transition={{ type: 'spring', stiffness: 300 }}
                                                >
                                                    {item.name}
                                                </motion.a>
                                            )}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
        
    );
};

export default Navbar;