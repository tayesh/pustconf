const AboutCon = () => {
    return (
        <div className="my-16">
            {/* Original mx-20 preserved, only made responsive */}
            <div className="grid grid-cols-3 gap-12 mx-4 sm:mx-8 lg:mx-20">

                {/* About PUST Section - 100% unchanged with animations */}
                <div className="col-span-3 lg:col-span-2">
                    <h2 className="text-3xl font-semibold opacity-0 [animation:fadeIn_0.8s_ease-in-out_forwards]">
                        About ICERFEST
                    </h2>
                    <div className="divider divider-error opacity-0 [animation:slideInLeft_0.6s_ease-in-out_0.3s_forwards]"></div>
                    <p className="text-justify leading-9 opacity-0 mt-5 [animation:fadeIn_0.8s_ease-in-out_0.4s_forwards]">
                        Welcome to the International Conference on Emerging Research Frontiers in Engineering, Science and Technology 2026 (ICERFEST-2026) organized by the Faculty of Engineering and technology, Pabna University of Science and Technology, Pabna-6600, Bangladesh. The conference will be held in a hybrid mode on April 04-05, 2026 at the Pabna University of Science and Technology in Bangladesh. ICERFEST brings together researchers, academics, scientists, and industry professionals from around the globe to share their latest findings, innovations, and insights across diverse domains of engineering, science, and technology. Through this conference, we aim to transform advanced academic research into practical solutions for industry, fostering innovation, and collaboration. Researchers working in the relevant fields are encouraged to submit their novel or extended works for presentation at the conference and publication in the conference proceedings. All submitted papers will be double-blind peer-reviewed by the experts of the corresponding fields. Accepted and presented papers at the conference will be submitted for inclusion into IEEE Xplore Digital Library subject to IEEE Xplore's scope and quality requirements (under process).
                    </p>
                </div>

                {/* Important Dates Section - 100% unchanged with animations */}
                <div className="col-span-3 lg:col-span-1 opacity-0 [animation:fadeIn_0.8s_ease-in-out_0.5s_forwards]">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">IMPORTANT DATES</h2>
                    <div className="divider divider-error opacity-0 [animation:slideInRight_0.6s_ease-in-out_0.6s_forwards]"></div>

                    <div className="space-y-3">
                        <div className="flex justify-between flex-col items-center gap-2 px-5 py-2.5 rounded-br-xl rounded-tl-xl shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 [animation:fadeIn_0.5s_ease-in-out_0.7s_forwards]">
                            <p className="font-semibold text-base text-gray-700">Paper Submission Deadline</p>
                            <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full px-4 py-1.5 shadow-md">January 01, 2026 </span>
                        </div>

                        <div className="flex justify-between flex-col items-center gap-2 px-5 py-2.5 rounded-br-xl rounded-tl-xl  shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 [animation:fadeIn_0.5s_ease-in-out_0.8s_forwards]">
                            <p className="font-semibold text-base text-gray-700">Notification of Acceptance</p>
                            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full px-4 py-1.5 shadow-md">February 12, 2026</span>
                        </div>

                        <div className="flex justify-between flex-col items-center gap-2 px-5 py-2.5 rounded-br-xl rounded-tl-xl shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 [animation:fadeIn_0.5s_ease-in-out_0.9s_forwards]">
                            <p className="font-semibold text-base text-gray-700">Camera-Ready Paper Submission</p>
                            <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full px-4 py-1.5 shadow-md text-nowrap">February 26, 2026</span>
                        </div>

                        <div className="flex justify-between flex-col items-center gap-2 px-5 py-2.5 rounded-br-xl rounded-tl-xl shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 [animation:fadeIn_0.5s_ease-in-out_1.0s_forwards]">
                            <p className="font-semibold text-base text-gray-700">Registration Deadline</p>
                            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full px-4 py-1.5 shadow-md">March 05, 2026</span>
                        </div>

                        <div className="flex justify-between flex-col items-center gap-2 px-5 py-2.5 rounded-br-xl rounded-tl-xl shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50 border border-gray-200 opacity-0 [animation:fadeIn_0.5s_ease-in-out_1.1s_forwards]">
                            <p className="font-semibold text-base text-gray-700">Conference Date</p>
                            <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-full px-4 py-1.5 shadow-md">April 04-05, 2026</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations embedded directly in component */}
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

export default AboutCon;