const Upperbanner = () => {
    return (
        <div className="mx-20 my-3 mb-6 flex justify-between">
            <div className="flex items-center gap-3">
                {/* <img src="https://i.ibb.co/cKCC02YG/pabna-university-of-science-and-technology-275200.png" alt="University Logo" className="h-12 md:h-20" /> */}
                <div>
                    <p className="text-lg">ICERFEST-2026</p>
                    <p className="text-md uppercase">INTERNATIONAL CONFERENCE On <br />
                        Emerging Research Frontiers in Engineering, Science and Technology 2026</p>
                </div>
            </div>
            <div className="flex justify-end gap-6">
                <img src="https://i.ibb.co/cKCC02YG/pabna-university-of-science-and-technology-275200.png" alt="University Logo" className="h-12 md:h-20" />
                <img src="https://eict2025.kuet.ac.bd/images/IEEE_LOGO.png" alt="IEEE" className="h-12 md:h-20" />
            </div>
        </div>
    );
};

export default Upperbanner;