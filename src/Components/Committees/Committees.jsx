import { useLocation } from 'react-router-dom';

const Committees = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedRole = queryParams.get('role');
    const conferenceOrganizers = [
        {
            role: "Chief Patron",
            members: [
                {
                    name: "Prof. Dr. S M Abdul-Awal",
                    position: "Vice Chancellor, PUST",
                    image: "https://www.pust.ac.bd/includes/images/administrators/S M Abdul-Awal.JPG"
                }
            ]
        },
        {
            role: "Patrons",
            members: [
                {
                    name: "Prof. Dr. Md. Nazrul Islam",
                    position: "Pro-Vice Chancellor, PUST",
                    image: "https://www.pust.ac.bd/includes/images/administrators/Pro%20Vice%20Chancellor_2024.JPG"
                },
                {
                    name: "Prof. Dr. Md. Shamim Ahsan",
                    position: "Treasurer, PUST",
                    image: "https://www.pust.ac.bd/includes/images/administrators/TREASURER.jpg"
                },
            ]
        },
        {
            role: "International Advisory Committee",
            members: [
                {
                    name: "Prof. Dr. Masanori Hanawa",
                    position: "University of Yamanashi, Japan",
                    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=n_5-iecAAAAJ&citpid=1"
                },
                {
                    name: "Prof. Dr. Martin Byung-Guk Jun",
                    position: "Purdue University, USA",
                    image: "https://engineering.purdue.edu/ResourceDB/ResourceFiles/image158060"
                },
                {
                    name: "Prof. Dr. Anis Haque",
                    position: "University of Calgary, Canada",
                    image: "https://profiles.ucalgary.ca/sites/default/files/styles/ucws_profile_picture/public/2024-05/Anis%20Profile.jpg?h=4fda0f34&itok=yUNrHybs"
                },
                {
                    name: "Prof. Dr Tariqul Islam",
                    position: "Universiti Kebangsaan Malaysia, Malaysia",
                    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=X2k_pIYAAAAJ&citpid=2"
                },
                {
                    name: "Prof. Dr. Nemai Chandra Karmakar",
                    position: "Monash University, Australia",
                    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=d8QvhmQAAAAJ&citpid=4"
                },
                {
                    name: "Prof. Dr. Jungpil Shin",
                    position: "The University of AIZU, Japan",
                    image: "data:image/jpeg;base64,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"
                },
                {
                    name: "Prof. Dr. Kunio Okimura",
                    position: "Tokai University, Japan",
                    image: "https://researchmap.jp/read0177992/avatar.JPG"
                },
                {
                    name: "Prof. Dr. Kiyoteru Kobayashi",
                    position: "ESCO, Ltd., Tokyo, JAPAN",
                    image: "https://researchmap.jp/read0126991/avatar.JPG"
                },
                {
                    name: "Prof. Dr. Hiromitsu Nishizaki",
                    position: "University of Yamanashi, Japan",
                    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=UGpdyLMAAAAJ&citpid=1"
                },
                {
                    name: "Prof. Boualem Boashash",
                    position: "The University of Queensland, Australia",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvX1nlkRBIkAXO6hUpDhu7QOVPNiIUmkcbb6sdr_DMp7q0Z9j550q1ho&usqp=CAE&s"
                },
                {
                    name: "Dr. S.H. Shah Newaz",
                    position: "Universiti Teknologi Brunei, Brunei Darussalam",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpJ1fbE5WugLW-CE01SsmktADfmRC9F_u7CRBaVy6kA&usqp=CAE&s"
                },
                {
                    name: "Dr. Md. Shahiduzzaman (Sohel)",
                    position: "Kanazawa University, Japan",
                    image: "https://researchmap.jp/Sohel/avatar.jpg"
                },
                {
                    name: "Dr. Mohammad Ali Moni",
                    position: "University of Queensland, Australia",
                    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=JnwcUwkAAAAJ&citpid=2"
                },
                {
                    name: "Dr. Farid Ahmed",
                    position: "University of Texas Rio Grande Valley, USA",
                    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=oS8iWM0AAAAJ&citpid=3"
                },
                {
                    name: "Dr. Md. Suruz Mian",
                    position: "Tokai University, Japan",
                    image: "data:image/jpeg;base64,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"
                },
                {
                    name: "Dr. Parvez Mahmud",
                    position: "University of Technology Sydney, Australia",
                    image: "data:image/jpeg;base64,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"
                },
                {
                    name: "Dr. Nazmul Siddique",
                    position: "Ulster University, United Kingdom",
                    image: "https://media.licdn.com/dms/image/v2/C4D03AQHmXY3pmA5_ig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1667987309223?e=1758153600&v=beta&t=R_NaznhxfKzroDs_PsVCt4JHzcBSW4KN0vrf6lpj3Io"
                },
                {
                    name: "Dr. Purno Mohon Ghosh",
                    position: "College of Charleston, USA",
                    image: "https://charleston.edu/engineering/faculty-and-staff/faculty-images/pghosh.jpg"
                },
                {
                    name: "Dr. Pallab Kanti Podder",
                    position: "Capital College, Australia",
                    image: "https://www.pust.ac.bd/includes/images/teachers/Capture-1.PNG"
                }
            ]
        },
        {
            role: "National Advisory Committee",
            members: [
                {
                    name: "Prof. Dr. A B M Shawkat Ali",
                    position: "Vice Chancellor, BUBT",

                    image: "https://www.bubt.edu.bd/assets/frontend/images/Prof_Dr_ABM_Shawkat_Ali.jpg"
                },
                {
                    name: "Prof. Dr. Khademul Islam Molla",
                    position: "Vice Chancellor, Varendra University",

                    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=7X_FeIIAAAAJ&citpid=3"
                },
                {
                    name: "Prof. Dr. M. Mofazzal Hossain",
                    position: "Pro-Vice Chancellor, Southeast University",

                    image: "https://ums-local.seu.edu.bd/file-server/v/2.0.0/profile-picture/hossain.mofazzal_dqtedh0v.jpg"
                },
                {
                    name: "Prof. Dr. Md. Delawer Hossain",
                    position: "Dept. of EEE and Director, IQAC, IIUC",

                    image: "https://www.iiuc.ac.bd/assets/images/xpro-vc.jpg.pagespeed.ic.T5Xe8EpQkJ.webp"
                },
                {
                    name: "Prof. Dr. Abu Bakar Md. Ismail",
                    position: "Dept. of EEE, University of Rajshahi",

                    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=FmcnUd0AAAAJ&citpid=3"
                },
                {
                    name: "Prof. Dr. Mohammed Moshiul Hoque",
                    position: "Dept. of CSE, CUET",

                    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=srYxYhcAAAAJ&citpid=3"
                },
                {
                    name: "Prof. Dr. Md. Abdur Razzak",
                    position: "Dept. of EEE, Independent University",

                    image: "https://iub.ac.bd/media-backend/faculty-media/Razzak_Sir-8f5bb7b9-6f9b-4c3b-8da9-f5897e85002e.png"
                },
                {
                    name: "Prof. Dr. Md Ekramul Hamid",
                    position: "Dept. of CSE, University of Rajshahi",

                    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=0EStz4UAAAAJ&citpid=2"
                },
                {
                    name: "Prof. Dr. Md. Faruk Hossain",
                    position: "Dept. of EEE, RUET",

                    image: "https://www.ruet.ac.bd/public/storage/profile/photo2.jpg"
                },
                {
                    name: "Prof. Dr. Monir Hossen",
                    position: "Head, Dept. of ECE, KUET",

                    image: "https://www.kuet.ac.bd/images/faculty/351"
                },
                {
                    name: "Prof. Dr. Md. Ariful Islam Nahid",
                    position: "Dept. of EEE, University of Rajshahi",

                    image: ""
                },
                {
                    name: "Prof. Dr. Md. Babul Islam",
                    position: "Dept. of EEE, University of Rajshahi",
                    image: ""
                },
                {
                    name: "Prof. Dr. Sinthia Shabnam Mou",
                    position: "Dept. of EEE, University of Rajshahi",
                    image: ""
                },
                {
                    name: "Prof. Dr. Shamim Ahmad",
                    position: "Dept. of CSE, University of Rajshahi",
                    image: "https://sciprofiles.com/profiles/1618901/Shamim_Ahmad.jpg?1752430573"
                },
                {
                    name: "Prof. Dr. Md. Hasnat Kabir",
                    position: "Dept. of ICE, University of Rajshahi",
                    image: ""
                },
                {
                    name: "Prof. Dr. Hasan Khaled Rouf",
                    position: "Dept. of EEE, University of Chittagong",
                    image: "https://cu.ac.bd/assets/image/faculty_staff_users/68_7VH6HU0FSH.jpg"
                }
            ]
        },
        {
            role: "General Chair",
            members: [
                {
                    name: "Celia Shahnaz",
                    position: "2023-24 IEEE WIE Chair BUET",
                    image: "http://eee.buet.ac.bd/archive/FacultyPage/photos/DCS.jpg"
                }
            ]
        },
        {
            role: "Organizing Chair(s)",
            members: [
                {
                    name: "Mohammed Imamul Hassan Bhuiyan",
                    position: "EEE, BUET",
                    image: "http://eee.buet.ac.bd/archive/FacultyPage/photos/DMIHB.jpg"
                },
                {
                    name: "Sheikh Rashel Al Ahmed",
                    position: "Dean, Faculty of Engineering and Technology, PUST",
                    image: "https://www.pust.ac.bd/includes/images/teachers/Photo_Rashel.JPG"
                }
            ]
        },
        {
            role: "Organizing Co-Chair(s)",
            members: [
                {
                    name: "Shahriyar Masud Rizvi",
                    position: "EEE, AIUB",
                    image: "https://www.aiub.edu/Files/Uploads/public-employee-profiles/profile-pictures/61923.jpg"
                },
                {
                    name: "Tahmina Tasnim Nahar",
                    position: "Chairman, Civil Engineering, PUST",
                    image: "https://www.pust.ac.bd/includes/images/teachers/Photo_Tahmina1.jpg"
                }
            ]
        },
        {
            role: "Organizing Secretary",
            members: [
                {
                    name: "Md. Anwar Hossain",
                    position: "Chairman, ICE, PUST",
                    image: "https://www.pust.ac.bd/includes/images/teachers/Anwar 1.jpg"
                }
            ]
        },
        {
            role: "Joint Secretary(s)",
            members: [
                {
                    name: "Tama Fouzder",
                    position: "EEE, Daffodil International University",
                    image: "https://faculty.daffodilvarsity.edu.bd/images/teacher/d681b1cd89eef58b2befaaf421de50ac.jpg"
                },
                {
                    name: "Md. Najmul Hossain",
                    position: "EECE, PUST",
                    image: "https://www.pust.ac.bd/includes/images/teachers/Dr. MNH Photo.jpg?key=123"
                }
            ]
        },
        {
            role: "Technical Program Chair(s)",
            members: [
                {
                    name: "Shaikh Anowarul Fattah",
                    position: "EEE, BUET",
                    image: "http://eee.buet.ac.bd/archive/FacultyPage/photos/DSAF.jpg"
                },
                {
                    name: "Md. Abdur Rahim",
                    position: "Chairman, CSE, PUST",
                    image: "https://www.pust.ac.bd/includes/images/teachers/PUST_100009.jpg"
                }
            ]
        },
        {
            role: "Technical Program Co-Chair(s)",
            members: [
                {
                    name: "Md. Maniruzzaman",
                    position: "ECE, Khulna University",
                    image: "https://ku.ac.bd/discipline/uploads/faculties/1608240642.jpg"
                },
                {
                    name: "Md. Toukir Ahmed",
                    position: "CSE, PUST",
                    image: "https://www.pust.ac.bd/includes/images/teachers/IMG-0610.jpg?key=123"
                }
            ]
        },
        {
            role: "Technical Program Secretary(s)",
            members: [
                {
                    name: "Sheikh Md. Rabiul Islam",
                    position: "ECE, KUET",
                    image: "https://i.ibb.co/vvTwwDV5/352.jpg"
                },
                {
                    name: "T. H. M. Sumon Rashid",
                    position: "Chairman, EEE, PUST",
                    image: "https://www.pust.ac.bd/includes/images/teachers/Headshot_Sumon.jpg"
                }
            ]
        },
        {
            role: "Finance Chair",
            members: [
                {
                    name: "Md. Imran Hossain",
                    position: "ICE, PUST",
                    image: "https://www.pust.ac.bd/includes/images/teachers/WeChat Image_20220515194336.jpg?key=123"
                }
            ]
        },
        {
            role: "Publication Chair",
            members: [
                {
                    name: "Muhammad Sajjadur Rahim",
                    position: "ICE, University of Rajshahi",
                    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=iduppzIAAAAJ&citpid=5"
                }
            ]
        },
        {
            role: "Publication Secretary",
            members: [
                {
                    name: "Dr. Md. Rashedul Islam",
                    position: "EECE, PUST",
                    image: "https://www.pust.ac.bd/includes/images/teachers/20230731_094105[1].jpg?key=123"
                }
            ]
        }
    ];

    const getFilteredOrganizers = () => {
        if (!selectedRole) return conferenceOrganizers;

        switch (selectedRole) {
            case 'Patrons':
                // Show both Chief Patron and Patrons
                return [
                    conferenceOrganizers.find(item => item.role === 'Chief Patron'),
                    conferenceOrganizers.find(item => item.role === 'Patrons')
                ].filter(Boolean);

            case 'General Chairs':
                return conferenceOrganizers.filter(item =>
                    item.role === 'General Chair'
                );

            case 'Organizing Chairs':
                // Show all organizing-related roles
                return [
                    conferenceOrganizers.find(item => item.role === 'Organizing Chair(s)'),
                    conferenceOrganizers.find(item => item.role === 'Organizing Co-Chair(s)'),
                    conferenceOrganizers.find(item => item.role === 'Organizing Secretary'),
                    conferenceOrganizers.find(item => item.role === 'Joint Secretary(s)')
                ].filter(Boolean);

            case 'Technical Program Chairs':
                // Show all technical program-related roles
                return [
                    conferenceOrganizers.find(item => item.role === 'Technical Program Chair(s)'),
                    conferenceOrganizers.find(item => item.role === 'Technical Program Co-Chair(s)'),
                    conferenceOrganizers.find(item => item.role === 'Technical Program Secretary(s)'),
                    conferenceOrganizers.find(item => item.role === 'Finance Chair'),
                    conferenceOrganizers.find(item => item.role === 'Publication Chair'),
                    conferenceOrganizers.find(item => item.role === 'Publication Secretary')
                ].filter(Boolean);

            default:
                // For individual roles not in groups
                return conferenceOrganizers.filter(item => item.role === selectedRole);
        }
    };

    const filteredOrganizers = getFilteredOrganizers();

    return (
        <div className="px-4 md:px-32 py-10">
            {filteredOrganizers.map((item, index) => (
                <div key={index} className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#923330] pb-5 mb-5 border-b-2 border-[#923330]">
                        {item.role}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {item.members.map((member, memberIndex) => (
                            <div
                                key={memberIndex}
                                className="relative h-64 md:h-96 rounded-lg overflow-hidden group shadow-xl"
                            >
                                <img
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src={member.image}
                                    alt={member.name}
                                />
                                <div className="absolute rounded-lg inset-0 w-full h-full bg-[#923330d5] transform translate-y-full group-hover:-translate-y-0 transition-all duration-500 ease-in-out">
                                    <div className="h-full p-6 flex flex-col justify-center text-white space-y-2">
                                        <h2 className="text-xl md:text-2xl font-medium">{member.name}</h2>
                                        <p className="text-base md:text-lg">{member.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Committees;