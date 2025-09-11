import React from 'react';

const RegistrationTable = () => {
    const primaryColor = '#923330';
    const lightBg = '#f8f1f1';

    return (
        <div className='m-16'>
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>REGISTRATION</h1>
                <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: primaryColor }}></div>
                <p className="text-lg max-w-3xl mx-auto">
                    The following registration fees will be applied to all participants (Authors/Attendees)
                </p>
            </div>
            <div className="overflow-x-auto">
                <table className="md:min-w-full border-collapse">
                    <thead>
                        <tr style={{ backgroundColor: primaryColor }} className="text-white">
                            <th className="py-3 px-4 text-left font-bold border" rowSpan="2">Category</th>
                            <th className="py-3 px-4 text-left font-bold border" rowSpan="2">Membership</th>
                            <th className="py-3 px-4 text-center font-bold border" colSpan="2">Registration Fee</th>
                        </tr>
                        <tr style={{ backgroundColor: primaryColor }} className="text-white">
                            <th className="py-2 px-4 text-center font-medium border">Local (BDT)</th>
                            <th className="py-2 px-4 text-center font-medium border">Foreign (US$)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* IEEE Member */}
                        <tr style={{ backgroundColor: lightBg }}>
                            <td className="py-2 px-4 font-semibold border" style={{ color: primaryColor }}>General Author</td>
                            <td className="py-2 px-4 border">IEEE Member</td>
                            <td className="py-2 px-4 text-center border">8,000</td>
                            <td className="py-2 px-4 text-center border">250</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 font-semibold border" style={{ color: primaryColor }}>General Author</td>
                            <td className="py-2 px-4 border">Non-IEEE Member</td>
                            <td className="py-2 px-4 text-center border">10,000</td>
                            <td className="py-2 px-4 text-center border">300</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 font-semibold border" style={{ color: primaryColor }}>Student Author</td>
                            <td className="py-2 px-4 border">IEEE Member</td>
                            <td className="py-2 px-4 text-center border">6,000</td>
                            <td className="py-2 px-4 text-center border">200</td>
                        </tr>
                        <tr style={{ backgroundColor: lightBg }}>
                            <td className="py-2 px-4 font-semibold border" style={{ color: primaryColor }}>Student Author</td>
                            <td className="py-2 px-4 border">Non-IEEE Member</td>
                            <td className="py-2 px-4 text-center border">8,000</td>
                            <td className="py-2 px-4 text-center border">250</td>
                        </tr>
                        <tr style={{ backgroundColor: lightBg }}>
                            <td className="py-2 px-4 font-semibold border" style={{ color: primaryColor }}>Life Member</td>
                            <td className="py-2 px-4 border">IEEE Member</td>
                            <td className="py-2 px-4 text-center border">6,000</td>
                            <td className="py-2 px-4 text-center border">200</td>
                        </tr>

                        {/* Non-IEEE Member */}
                        
                        
                        <tr>
                            <td className="py-2 px-4 font-semibold border" style={{ color: primaryColor }}>Participant</td>
                            <td className="py-2 px-4 border">Non-IEEE Member</td>
                            <td className="py-2 px-4 text-center border">8,000</td>
                            <td className="py-2 px-4 text-center border">250</td>
                        </tr>
                    </tbody>
                </table>

                <div className="mt-4 ml-10 text-lg text-gray-600">
                    <p>• One registration covers one paper. For additional paper, 50$ (for local authors 2000 BDT) will be added to registration fees listed.</p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationTable;