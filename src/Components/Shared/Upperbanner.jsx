const Upperbanner = () => {
    return (
        <div className="lg:px-20   bg-gradient-to-l from-[#9233306d] via-[#92333003] to-[#c929246d] lg:py-5 py-5 flex lg:flex-row flex-col justify-between gap-y-5">
            {/* Left side: Title and image */}
            <div className="flex lg:flex-row flex-col lg:items-center items-center lg:text-start text-center gap-4">
                <img
                    src="https://i.ibb.co.com/HpqQy3wJ/icerfest2.png"
                    alt="University Logo"
                    className="lg:w-32 w-64 rounded-full border-white border-2"
                />
                <div className="flex flex-col justify-end">
                    <p className="lg:text-xl lg:block hidden text-2xl">ICERFEST-2026</p>
                    <p className="lg:text-xl font-medium text-3xl sansation-bold leading-snug">
                        International Conference On <br />
                        Emerging Research Frontiers in Engineering, Science and Technology 2026
                    </p>
                </div>
            </div>

            {/* Right side: Partner logos */}
            <div className="flex items-center lg:mt-0 mt-5 justify-center pb-0 lg:justify-end gap-6">
                <img
                    src="https://i.ibb.co/cKCC02YG/pabna-university-of-science-and-technology-275200.png"
                    alt="University Logo"
                    className="w-16 block"
                />
                <img
                    src="https://i.ibb.co.com/VYVRJWYZ/ieee.png"
                    alt="IEEE"
                    className="w-32 block"
                />
            </div>
        </div>
    );
};

export default Upperbanner;
