import { motion } from 'framer-motion'; // Add this import

const DownloadTemplate = () => {
    return (
        <div className="mt-0 md:mt-12 lg:px-48 px-5 opacity-0 animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-gray-800">DOWNLOAD TEMPLATE</h2>
            <div className="divider divider-error opacity-0 animate-slideInLeft animation-delay-300"></div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
                {/* Overleaf Template Card */}
                <motion.div 
                    className="card bg-white shadow-xl hover:shadow-2xl transition-all border border-gray-200"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="card-body items-center text-center">
                        <h3 className="card-title text-xl font-bold mb-2">Overleaf Template</h3>
                        <p className="text-gray-600 mb-4">LaTeX template for paper submission</p>
                        <a 
                            href="https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn"
                            className="btn btn-wide bg-[#923330] hover:bg-[#7a2a28] text-white border-none"
                        >
                            Download
                        </a>
                    </div>
                </motion.div>

                {/* Word Template Card */}
                <motion.div 
                    className="card bg-white shadow-xl hover:shadow-2xl transition-all border border-gray-200"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="card-body items-center text-center">
                        <h3 className="card-title text-xl font-bold mb-2">MS Word Template</h3>
                        <p className="text-gray-600 mb-4">Microsoft Word template for paper submission</p>
                        <a 
                            href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx"
                            className="btn btn-wide bg-[#923330] hover:bg-[#7a2a28] text-white border-none"
                        >
                            Download
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Submission Link Section */}
            <div className="mt-12 opacity-0 animate-fadeIn animation-delay-800">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-gray-800">SUBMISSION PORTAL</h2>
                <div className="divider divider-error opacity-0 animate-slideInLeft animation-delay-900"></div>
                
                <motion.div 
                    className="card bg-white shadow-xl hover:shadow-2xl transition-all border border-gray-200 mt-8"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                >
                    <div className="card-body items-center text-center">
                        <h3 className="card-title text-xl font-bold mb-2">Microsoft CMT Submission System</h3>
                        <p className="text-gray-600 mb-4">Submit your paper through our conference management system</p>
                        <a 
                            href=""
                            className="btn btn-wide bg-[#923330] hover:bg-[#7a2a28] text-white border-none"
                        >
                            Go to Submission Portal
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DownloadTemplate;