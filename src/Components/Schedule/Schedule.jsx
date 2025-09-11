import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Schedule = () => {
    return (
        <div className='w-full pb-10'>
            {/* <h2 className='text-4xl font-bold uppercase tracking-wider text-[#923330] text-center my-10'>
                Conference Schedule
            </h2>
            <div className='w-full flex justify-center gap-10'>
                <NavLink
                    to="/schedule/day1"
                    end // Ensures this matches the index route ("/schedule")
                    className={({ isActive }) =>
                        `text-xl btn px-7 py-2 ${isActive ? 'bg-[#923330] text-white' : 'bg-gray-200 text-[#923330] hover:bg-gray-300'}`
                    }
                >
                    Day 1
                </NavLink>
                <NavLink
                    to="/schedule/day2"
                    className={({ isActive }) =>
                        `text-xl btn px-7 py-2 ${isActive ? 'bg-[#923330] text-white' : 'bg-gray-200 text-[#923330] hover:bg-gray-300'}`
                    }
                >
                    Day 2
                </NavLink>
            </div>
            <Outlet /> */}

            <div className="flex flex-col items-center justify-center my-20">
                <h3 className="text-5xl font-bold text-[#923330] mb-4">
                    Will Be Announced...
                </h3>
                <div className="w-24 h-1 bg-[#923330] rounded-full"></div>
            </div>
        </div>
    );
};

export default Schedule;