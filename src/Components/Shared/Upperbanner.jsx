const Upperbanner = () => {
    return (
        <div className="lg:mx-20 my-3 lg:py-0 py-5 mb-6 flex lg:flex-row flex-col justify-between gap-y-5">
            {/* Left side: Title and image */}
            <div className="flex lg:flex-row flex-col lg:items-center items-center lg:text-start text-center gap-4">
                <img
                    src="https://i.ibb.co.com/B5S0j14n/Whats-App-Image-2025-09-14-at-23-33-58-e20612ec.jpg"
                    alt="University Logo"
                    className="lg:w-32 w-64"
                />
                <div className="flex flex-col justify-end">
                    <p className="lg:text-lg lg:block hidden text-2xl">ICERFEST-2026</p>
                    <p className="lg:text-lg font-medium text-3xl sansation-bold leading-snug">
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
                    className="w-16"
                />
                <img
                    src="https://i.ibb.co/RkYRHV7d/308202629-407839098180041-5329988136968191750-n.jpg"
                    alt="IEEE"
                    className="w-32"
                />
            </div>
        </div>
    );
};

export default Upperbanner;
