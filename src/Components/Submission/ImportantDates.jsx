const ImportantDates = () => {
    return (
        <div className="col-span-1 lg:px-48 px-5 md:col-span-2 opacity-0 animate-fadeIn animation-delay-500">
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
    );
};

export default ImportantDates;