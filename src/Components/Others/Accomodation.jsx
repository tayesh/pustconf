import React from 'react';

const resorts = [
    {
        name: "Rupkotha Eco Resort",
        address: "Banglabazar Road, Pabna",
        images: [
            "https://i.ibb.co/dTNjQsD/rupkotha-eco-resort-2.jpg",
            "https://i.ibb.co/0RLxT6Kn/rupkotha-eco-resort.jpg",
            "https://i.ibb.co/kCVhfcm/rupkotha-eco-resort-1.jpg"
        ],
        facebook: "https://www.facebook.com/rupkothaecoresort",
        mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29156.668590095425!2d89.24195650000001!3d24.010477899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b8ec39ef3e1%3A0x5bed25ec4ecde582!2sRupkotha%20Eco%20Resort!5e0!3m2!1sen!2sbd!4v1747129008609!5m2!1sen!2sbd" width="100%" height="300" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: "Ratnodweep Resort",
        address: "Dhaka - Pabna Hwy, Pabna",
        images: [
            "https://i.ibb.co/L2jZp8g/front01.jpg",
            "https://i.ibb.co/XZHsZ7m8/executive01.jpg",
            "https://i.ibb.co/jPVBXcTP/obak03.jpg"
        ],
        website: "https://ratnodweepresort.com/",
        mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29156.668590095425!2d89.24195650000001!3d24.010477899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe845c334a0969%3A0x8e8ea78a11c25063!2sRatnodweep%20Resort!5e0!3m2!1sen!2sbd!4v1747129118210!5m2!1sen!2sbd" width="100%" height="300" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: "Grand River View Hotel",
        address: "232, Rajshahi",
        images: [
            "https://i.ibb.co/xq8dFX0T/Album-Cover-82-E4-A8-ECAC-EC74066950.jpg",
            "https://i.ibb.co/tpv7DtBy/254610576-866700277377354-2213670717236503422-n.webp",
            "https://i.ibb.co/Kjb4DTr7/unnamed.webp"
        ],
        website: "https://grandriverviewbd.com/",
        mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.362107608523!2d88.57686177481105!3d24.36870356475978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa02ce14869%3A0x9fc891b4789cac27!2sGrand%20River%20View%20Hotel!5e0!3m2!1sen!2sbd!4v1747129282131!5m2!1sen!2sbd" width="100%" height="300" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
        name: "Aronno Resort",
        address: "Shaheed A.H.M. Kamaruzzaman Central Park, Rajshahi",
        images: [
            "https://i.ibb.co/TxP3py16/1-1473x1536.jpg",
            "https://i.ibb.co/GQWvDfY8/1203-a.jpg",
            "https://i.ibb.co/YBCSVW6P/1305-s.jpg"
        ],
        website: "https://www.aronnoresort.com/",
        mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.374559985753!2d88.56917717481105!3d24.368270164776753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefdce8154b2f%3A0xc5944ab7b69b0870!2sAronno%20Resort!5e0!3m2!1sen!2sbd!4v1747129434138!5m2!1sen!2sbd" width="100%" height="300" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`
    }
];

const Acommodation = () => {
    return (
        <div className="lg:px-32 px-4 space-y-10 ">
            <h2 className='text-4xl font-bold my-4 text-[#923330]'>Nearby Accomodations</h2>
            {resorts.map((resort, index1) => (
                <div key={index1} className={`border-r-8 border-[#923330] rounded-tl-2xl rounded-bl-2xl shadow-[5px_5px_10px] shadow-slate-600  lg:p-5 p-3 my-5  lg:grid lg:grid-cols-3 lg:gap-5`}>
                    {/* Resort Images */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 rounded-3xl h-[300px] sm:h-[400px] lg:h-full col-span-2 order-1 lg:order-none">
                        {resort.images.map((item, index) => (
                            <img
                                key={index}
                                className={`object-cover object-center w-full h-full rounded-xl ${index === 0 ? "row-span-2" : ""}`}
                                src={item}
                                alt={`resort-img-${index}`}
                            />
                        ))}
                    </div>

                    {/* Resort Info and Links */}
                    <div className="flex flex-col justify-between gap-5 lg:pt-0 pt-2 order-2 lg:order-none">
                        <div className="lg:space-y-5 space-y-2 flex flex-col items-end">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl">{resort.name}</h2>
                            <p className="text-lg text-end sm:text-xl">{resort.address}</p>
                            {resort.website && (
                                <a
                                    href={resort.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#923330] text-white text-lg px-4 py-2 inline-block"
                                >
                                    Visit Website
                                </a>
                            )}
                            {resort.facebook && (
                                <a
                                    href={resort.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#923330] text-white text-lg px-4 py-2 inline-block"
                                >
                                    Visit Facebook Page
                                </a>
                            )}
                        </div>

                        {/* Map Embed */}
                        <div
                            className="w-full h-[250px] sm:h-[300px] overflow-hidden rounded-xl"
                            dangerouslySetInnerHTML={{ __html: resort.mapEmbed }}
                        />
                    </div>
                </div>

            ))}
        </div>
    );
};

export default Acommodation;
