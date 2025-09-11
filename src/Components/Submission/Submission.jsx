const Submission = () => {
    return (
        <div className="my-8 md:my-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-20">
                {/* Important Dates Section */}
                <div className="col-span-1 md:col-span-2 opacity-0 animate-fadeIn animation-delay-500">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-6 text-gray-800">IMPORTANT DATES</h2>
                    <div className="divider divider-error opacity-0 animate-slideInRight animation-delay-600"></div>

                    <div className="space-y-3 md:space-y-4 mt-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center p-4 md:p-5 rounded-lg shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 animate-fadeIn animation-delay-700">
                            <p className="font-semibold text-sm md:text-base text-gray-700 mb-2 sm:mb-0 text-center sm:text-left">Paper Submission Deadline</p>
                            <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full px-3 py-1 md:p-2 text-sm md:text-base shadow-md">January 01, 2026</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-center p-4 md:p-5 rounded-lg shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 animate-fadeIn animation-delay-800">
                            <p className="font-semibold text-sm md:text-base text-gray-700 mb-2 sm:mb-0 text-center sm:text-left">Notification of Acceptance</p>
                            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full px-3 py-1 md:p-2 text-sm md:text-base shadow-md">February 12, 2026</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-center p-4 md:p-5 rounded-lg shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 animate-fadeIn animation-delay-900">
                            <p className="font-semibold text-sm md:text-base text-gray-700 mb-2 sm:mb-0 text-center sm:text-left">Camera-Ready Submission</p>
                            <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full px-3 py-1 md:p-2 text-sm md:text-base shadow-md">February 26, 2026</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-center p-4 md:p-5 rounded-lg shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 animate-fadeIn animation-delay-1000">
                            <p className="font-semibold text-sm md:text-base text-gray-700 mb-2 sm:mb-0 text-center sm:text-left">Registration Deadline</p>
                            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full px-3 py-1 md:p-2 text-sm md:text-base shadow-md">March 05, 2026</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-center p-4 md:p-5 rounded-lg shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 animate-fadeIn animation-delay-1100">
                            <p className="font-semibold text-sm md:text-base text-gray-700 mb-2 sm:mb-0 text-center sm:text-left">Conference Date</p>
                            <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-full px-3 py-1 md:p-2 text-sm md:text-base shadow-md">April 04–05, 2026</span>
                        </div>
                    </div>
                </div>

                {/* Download Template and Submission Link Section */}
                <div className="mt-0 md:mt-12">
                    <h2 className="text-xl md:text-2xl font-semibold opacity-0 animate-fadeIn">
                        DOWNLOAD TEMPLATE
                    </h2>
                    <div className="divider divider-error my-2 opacity-0 animate-slideInLeft animation-delay-300"></div>
                    <div className="space-y-3 md:space-y-4">
                        <div>
                            <a href="https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn" 
                               className="text-[#923330] text-lg md:text-xl font-bold py-1 md:py-2 px-3 md:px-4 rounded block text-center sm:text-left hover:underline animate-fadeIn">
                                Overleaf Template
                            </a>
                        </div>
                        <hr className="my-2" />
                        <div>
                            <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx" 
                               className="text-[#923330] text-lg md:text-xl font-bold py-1 md:py-2 px-3 md:px-4 rounded block text-center sm:text-left hover:underline animate-fadeIn">
                                MS Word Paper Template
                            </a>
                        </div>
                    </div>
                    
                    <div className="my-6 md:my-8">
                        <h2 className="text-xl md:text-2xl font-semibold opacity-0 animate-fadeIn">
                            SUBMISSION LINK
                        </h2>
                        <div className="divider divider-error opacity-0 my-2 animate-slideInLeft animation-delay-300 "></div>
                        <div className="flex flex-col sm:flex-row items-center">
                            <p className="text-lg md:text-xl font-semibold mb-2 sm:mb-0 sm:ml-4">Microsoft CMT:</p>
                            <a href="https://cmt3.research.microsoft.com/NCIM2025/" 
                               className="text-[#923330] text-lg md:text-xl font-bold py-1 md:py-2 px-3 md:px-4 rounded hover:underline animate-fadeIn">
                                Click Here
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tailwind CSS animations */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideInLeft {
                    from { transform: translateX(-20px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideInRight {
                    from { transform: translateX(20px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-in-out forwards;
                }
                .animate-slideInLeft {
                    animation: slideInLeft 0.6s ease-in-out forwards;
                }
                .animate-slideInRight {
                    animation: slideInRight 0.6s ease-in-out forwards;
                }
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                .animation-delay-600 {
                    animation-delay: 0.6s;
                }
                .animation-delay-700 {
                    animation-delay: 0.7s;
                }
                .animation-delay-800 {
                    animation-delay: 0.8s;
                }
                .animation-delay-900 {
                    animation-delay: 0.9s;
                }
                .animation-delay-1000 {
                    animation-delay: 1.0s;
                }
                .animation-delay-1100 {
                    animation-delay: 1.1s;
                }
            `}</style>
        </div>
    );
};

export default Submission;