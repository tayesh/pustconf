const Contact = () => {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-6 text-[#923330]">CONTACT INFORMATION</h2>
            <div className="divider" style={{ backgroundColor: '#923330', opacity: 0 }}></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn animation-delay-300">
                {/* General Chair */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#923330] animate-slideInLeft">
                    <h3 className="text-2xl font-bold text-[#923330] mb-3">Organizing Secretary</h3>
                    <p className="font-semibold">Md. Anwar Hossain</p>
                    <p>Chairman, Department of Information and Communication Engineering</p>
                    <p>Pabna University of Science and Technology, Pabna</p>
                    <div className="mt-3">
                        <p><span className="font-medium text-[#923330]">Email (Personal) :</span>  manwar.ice@gmail.com </p>
                        <p><span className="font-medium text-[#923330]">Mobile (Personal) :</span> +8801717330923 </p>
                        <p><span className="font-medium text-[#923330]">Email (Office) :</span>  manwar.ice@pust.ac.bd </p>
                        <p><span className="font-medium text-[#923330]">Mobile (Office) :</span> ++8802588845644 </p>
                    </div>
                </div>

                {/* Organizing Secretary */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#923330] animate-slideInRight">
                    <h3 className="text-2xl font-bold text-[#923330] mb-3">Organizing Chair</h3>
                    <p className="font-semibold">Sheikh Rashel Al Ahmed</p>
                    <p>Dean, Faculty of Engineering and Technology</p>
                    <p>Pabna University of Science and Technology, Pabna.</p>
                    <div className="mt-3">
                        <p><span className="font-medium text-[#923330]">Email (Personal) :</span>   skrashel.ru@gmail.com </p>
                        <p><span className="font-medium text-[#923330]">Mobile (Personal) :</span>  +8801742191314</p>
                        <p><span className="font-medium text-[#923330]">Email (Office) :</span>  rashel@pust.ac.bd </p>
                        <p><span className="font-medium text-[#923330]">Mobile (Office) :</span>  +88 0258884 4903 </p>
                    </div>
                </div>
                {/* Organizing Secretary */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#923330] animate-slideInRight">
                    <h3 className="text-2xl font-bold text-[#923330] mb-3">Organizing Chair</h3>
                    <p className="font-semibold">Dr. Mohammed Imamul Hassan Bhuiyan</p>
                    <p>Professor, Dept. of Electrical and Electronic Engineering (EEE)</p>
                    <p>Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh</p>
                    <div className="mt-3">
                        <p><span className="font-medium text-[#923330]">Email (Personal) :</span>  imamul@eee.buet.ac.bd</p>
                        <p><span className="font-medium text-[#923330]">Mobile (Personal) :</span>  +88 01922 544 639</p>
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

export default Contact;