const Guideline = () => {
    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-48 py-10 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold animate-fadeIn">
                Paper Submission Guidelines
            </h2>

            <div className="divider divider-error animate-slideInLeft"></div>

            <p className="text-base sm:text-lg text-justify leading-relaxed">
                Authors are invited to submit their original, unpublished papers electronically (PDF format using the IEEE conference template) through conference website. Paper submissions should be limited to a minimum of four (4) pages and upto six (6) pages, in the IEEE 2-column format including figures and references. All submissions will be reviewed double-blind by the Program Committee on the basis of technical quality, originality, and clarity of presentation. 
                <span className="font-semibold">
                    Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements. (Conference Id: XXXX, Approval Pending)
                </span>.
            </p>

            <ul className="text-base sm:text-lg list-disc ml-5 space-y-3 text-justify">
                <li>
                    Make sure that no part of this paper (including Figure/Table/Algorithm) is copied from other sources. Make sure that you did not do any plagiarism or self-plagiarism? 
                    <span className="font-semibold"> The similarity shall be less than 30% (Overall) and more than 4% from a single source.</span>
                </li>
                <li>
                    The papers will be reviewed by the program committee and the authors will be notified of the decision. The authors should also ensure that the submitted papers are free from any errors and that the formatting is correct.
                </li>
            </ul>

            <div className="space-y-6">
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Before submission</h3>
                    <ul className="list-disc ml-5 text-base sm:text-lg text-justify">
                        <li>
                            Before submitting the manuscript, authors are requested to read and follow the “IEEE Submission Policies” in{' '}
                            <a className="font-bold text-[#923330] hover:underline" href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/guidelines-and-policies/submission-policies/" target="_blank" rel="noopener noreferrer">
                                Click Here
                            </a>{' '}
                            and “IEEE Peer Review Policy” in{' '}
                            <a className="font-bold text-[#923330] hover:underline" href="https://conferences.ieeeauthorcenter.ieee.org/understand-peer-review/" target="_blank" rel="noopener noreferrer">
                                Click Here
                            </a>.
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Double-Blind Paper</h3>
                    <ul className="list-disc ml-5 text-base sm:text-lg text-justify">
                        <li>
                            The authors should not include their names, affiliations, postal addresses, and email addresses in the initial manuscript. If it is not maintained the manuscript will be immediately rejected.
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Manuscript Template</h3>
                    <ul className="list-disc ml-5 text-base sm:text-lg text-justify">
                        <li>
                            Submissions must follow standard IEEE conference templates (Please download and use A4 Size Template). The manuscript template is provided on the website or can be downloaded from IEEE website: 
                            <a className="font-bold text-[#923330] hover:underline" href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer"> Click Here</a>.
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Microsoft CMT Submission</h3>
                    <ul className="list-disc ml-5 text-base sm:text-lg text-justify">
                        <li>
                            Each paper needs to be submitted electronically as a single PDF file through Microsoft CMT: 
                            <a className="font-bold text-[#923330] hover:underline" href="https://cmt3.research.microsoft.com/NCIM2025/" target="_blank" rel="noopener noreferrer"> Click Here</a>.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-xl text-center space-y-5 p-[10%]">
                <h2>This conference uses Microsoft CMT for the submission and review process.</h2>
                <p>
                    The <span>Microsoft CMT</span> service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                </p>

            </div>


            {/* Animation styles */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-in-out forwards;
                }

                .animate-slideInLeft {
                    animation: slideInLeft 0.6s ease-in-out 0.3s forwards;
                }
            `}</style>
        </div>
    );
};

export default Guideline;
