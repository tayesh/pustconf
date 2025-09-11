import React from 'react';
import { motion } from 'framer-motion';

const TouristSpot = () => {
    const touristSpots = [
        {
            name: "Tarash Bhaban",
            address: "Abdul Hamid Road, Pabna",
            images: [
                "https://i.ibb.co/XZsyCbC2/unnamed-2.webp",
                "https://i.ibb.co/s9MXN1zr/unnamed.webp",
                "https://i.ibb.co/B2bL8d8b/unnamed-3.webp",
            ],
            iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.3263527771364!2d89.2340873!3d24.004568000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b2690830675%3A0x7cd89063d7254f28!2sTarash%20Bhaban!5e1!3m2!1sen!2sbd!4v1747136708626!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            name: "Hardinge Bridge",
            address: "Hardinge Bridge, 6622 Lalon Shah Bridge",
            images: [
                "https://i.ibb.co/ds9h5878/unnamed-1.webp",
                "https://i.ibb.co/ynzry30L/unnamed-2.webp",
                "https://i.ibb.co/rGC5jHDL/unnamed.webp"
            ],
            iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.8458936110815!2d89.0300063!3d24.0679958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fea1e6a68cbdf3%3A0x4c33283b15d3f44e!2sHardinge%20Bridge!5e1!3m2!1sen!2sbd!4v1747136766447!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            name: "Horticultural Center Tebunia",
            address: "Horticultural Center, Tebunia, Pabna",
            images: [
                "https://i.ibb.co/RG45cLdY/unnamed-3.webp",
                "https://i.ibb.co/zVvqm69B/unnamed-1.webp",
                "https://i.ibb.co/PLmP44K/unnamed.webp"
            ],
            iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.4991883358393!2d89.2060162!3d24.082827099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9dfa57ad0dfb%3A0x55164f171a5d91fb!2sHorticultural%20Center%20Tebunia%2CPabna!5e1!3m2!1sen!2sbd!4v1747137141705!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            name: "Digapatiya Rajbari",
            address: "Dighapatia, Natore",
            images: [
                "https://i.ibb.co/Kc61JbD4/IMG-20250513-WA0006.jpg",
                "https://i.ibb.co/TBRYr5Mc/IMG-20250513-WA0007.jpg",
                "https://i.ibb.co/ZRgYRkML/IMG-20250513-WA0005.jpg"
            ],
            iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11956.347989592292!2d88.99139298349115!3d24.4400885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc13c0252d63d7%3A0x5c569b0fee94ef98!2zRGlnYXBhdGl5YSBSYWpiYXJpLSDgpqbgp4Dgppjgpr7gpqrgpqTgpr_gpq_gprzgpr4g4Kaw4Ka-4Kac4Kas4Ka-4Kec4KeA!5e1!3m2!1sen!2sbd!4v1747137240149!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            name: "Natore Rajbari",
            address: "Rajbari Rd, Natore",
            images: [
                "https://i.ibb.co/kYy9HpX/unnamed-1.webp",
                "https://i.ibb.co/Q4Y1hkD/unnamed-2.webp",
                "https://i.ibb.co/9kZH2Ph0/unnamed.webp"
            ],
            iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11958.255968864678!2d88.97282528715819!3d24.419962099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc11646d935fa1%3A0x7e67a544df04a973!2sNatore%20Rajbari!5e1!3m2!1sen!2sbd!4v1747137331984!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            name: "Shilaidaha Rabindra Kuthibari",
            address: "Kuthibari Road, Kushtia",
            images: [
                "https://i.ibb.co/35YL4Rxg/1200px-1.jpg",
                "https://i.ibb.co/hJ67bF7k/IMG-20250513-WA0004.jpg",
                "https://i.ibb.co/8g1xDj6g/image.jpg"
            ],
            iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.2959771899427!2d89.21748757442133!3d23.919937478555095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9044f06df655%3A0xbc543e0ea99e1a8d!2sShilaidaha%20Rabindra%20Kuthibari!5e1!3m2!1sen!2sbd!4v1747137618059!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            name: "Mahasthangarh Tourism Park",
            address: "Shibganj, Bogura",
            images: [
                "https://i.ibb.co/PzcVGqtk/1-146.jpg",
                "https://i.ibb.co/Dfwshpny/mahasthangarh-bogra-770x420.jpg",
                "https://i.ibb.co/PGMWcp5V/mohasthangar-musume.jpg"
            ],
            iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97134.59433385929!2d89.3046378312648!3d24.92136552550705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5549da888301%3A0x96c4a0ddad91f0c8!2sMahasthangarh%20Tourism%20Park!5e1!3m2!1sen!2sbd!4v1747142125590!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            name: "Puthia Rajbari",
            address: "Puthia - Bagha Rd, Puthia, Rajshahi",
            images: [
                "https://i.ibb.co/Xk5gfXx8/image.png",
                "https://i.ibb.co/yFBc7yJF/image.png",
                "https://i.ibb.co/PGD0DtVt/image.png"
            ],
            iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.5561556449115!2d88.83424117535502!3d24.36194897825801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc08ee31228683%3A0xec7d9a92ddfc1103!2sPuthia%20Rajbari!5e0!3m2!1sen!2sbd!4v1747143440042!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        }
    ];
  const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                
                duration: 1.5
            }
        }
    };

    const imageVariants = {
        offscreen: { scale: 0.9, opacity: 0 },
        onscreen: { 
            scale: 1, 
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    };

    return (
        <div className="lg:px-32 px-4 space-y-10">
            <h2 className="text-3xl font-bold text-[#923330]">
                Nearby Tourist Spots
            </h2>
            
            {touristSpots.map((touristSpot, index1) => (
                <motion.div
                    key={index1}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    className={`border-r-8 border-[#923330] rounded-tl-2xl rounded-bl-2xl shadow-[5px_5px_10px] shadow-slate-600 p-3 lg:p-5 my-5 lg:grid lg:grid-cols-3 lg:gap-5`}
                >
                    {/* touristSpot Images */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 rounded-3xl h-[300px] sm:h-[400px] lg:h-full col-span-2 order-1 lg:order-none">
                        {touristSpot.images.map((item, index) => (
                            <motion.img
                                key={index}
                                className={`object-cover object-center w-full h-full rounded-xl ${index === 0 ? "row-span-2" : ""}`}
                                src={item}
                                alt={`touristSpot-img-${index}`}
                                variants={imageVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            />
                        ))}
                    </div>

                    {/* touristSpot Info and Links */}
                    <motion.div 
                        className="flex flex-col justify-between lg:gap-5 gap-2 order-2 lg:order-none"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <div className="lg:space-y-5 space-y-1 flex flex-col my-2 lg:my-5 items-start lg:items-end">
                            <h2 className="text-2xl text-[#923330] sm:text-3xl text-end font-bold tracking-wider lg:text-4xl">
                                {touristSpot.name}
                            </h2>
                            <p className="text-lg text-end sm:text-xl">
                                {touristSpot.address}
                            </p>
                        </div>

                        {/* Map Embed */}
                        <motion.div
                            className="w-full h-[250px] sm:h-[300px] overflow-hidden rounded-xl"
                            dangerouslySetInnerHTML={{ __html: touristSpot.iframe }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        />
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default TouristSpot;
