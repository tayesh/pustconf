const Dates = () => {
    return (
        <div className="my-12 md:mx-32">
            <div className="col-span-3 lg:col-span-1 opacity-0 [animation:fadeIn_0.8s_ease-in-out_0.5s_forwards]">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">IMPORTANT DATES</h2>
                    <div className="divider divider-error opacity-0 [animation:slideInRight_0.6s_ease-in-out_0.6s_forwards]"></div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-5 rounded-lg shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 [animation:fadeIn_0.5s_ease-in-out_0.7s_forwards]">
                            <p className="font-semibold text-lg text-gray-700">Paper Submission Deadline</p>
                            <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full p-2 shadow-md">January 01, 2026</span>
                        </div>

                        <div className="flex justify-between items-center p-5 rounded-lg shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 [animation:fadeIn_0.5s_ease-in-out_0.8s_forwards]">
                            <p className="font-semibold text-lg text-gray-700">Notification of Acceptance</p>
                            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full p-2 shadow-md">February 12, 2026</span>
                        </div>

                        <div className="flex justify-between items-center p-5 rounded-lg shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 [animation:fadeIn_0.5s_ease-in-out_0.9s_forwards]">
                            <p className="font-semibold text-lg text-gray-700">Camera-Ready Submission</p>
                            <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full p-2 shadow-md">February 26, 2026</span>
                        </div>

                        <div className="flex justify-between items-center p-5 rounded-lg shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 [animation:fadeIn_0.5s_ease-in-out_1.0s_forwards]">
                            <p className="font-semibold text-lg text-gray-700">Registration Deadline</p>
                            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full p-2 shadow-md">March 05, 2026</span>
                        </div>

                        <div className="flex justify-between items-center p-5 rounded-lg shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 [animation:fadeIn_0.5s_ease-in-out_1.1s_forwards]">
                            <p className="font-semibold text-lg text-gray-700">Conference Date</p>
                            <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-full p-2 shadow-md">April 04–05, 2026</span>
                        </div>
                    </div>
                </div>

                <style jsx>{`
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
            `}</style>
        </div>
    );
};

export default Dates;