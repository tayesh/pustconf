import Dates from "../Dates/Dates";
import Tracks from "../Home/Tracks";

const CallPaper = () => {
    return (
        <div className="my-12 mx-4 lg:mx-20">
            <h2 className="text-3xl font-semibold opacity-0 [animation:fadeIn_0.8s_ease-in-out_forwards]">
                Call for paper
            </h2>
            <div className="divider divider-error opacity-0 [animation:slideInLeft_0.6s_ease-in-out_0.3s_forwards]"></div>

            <p className="text-lg text-justify">Welcome to the International Conference on Emerging Research Frontiers in Engineering, Science and Technology 2026 (ICERFEST-2026) organized by the Faculty of Engineering and technology, Pabna University of Science and Technology, Pabna-6600, Bangladesh. The conference will be held in a hybrid mode on April 04-05, 2026 at the Pabna University of Science and Technology in Bangladesh. ICERFEST brings together researchers, academics, scientists, and industry professionals from around the globe to share their latest findings, innovations, and insights across diverse domains of engineering, science, and technology. Through this conference, we aim to transform advanced academic research into practical solutions for industry, fostering innovation, and collaboration. Researchers working in the relevant fields are encouraged to submit their novel or extended works for presentation at the conference and publication in the conference proceedings. All submitted papers will be double-blind peer-reviewed by the experts of the corresponding fields. Accepted and presented papers at the conference will be submitted for inclusion into IEEE Xplore Digital Library subject to IEEE Xplore's scope and quality requirements (under process) </p>

            {/* <p className="text-base sm:text-lg mt-8 text-justify leading-relaxed">
                Authors are invited to submit their original, unpublished papers electronically (PDF format using the IEEE conference template) through conference website. Paper submissions should be limited to a minimum of four (4) pages and upto six (6) pages, in the IEEE 2-column format including figures and references. All submissions will be reviewed double-blind by the Program Committee on the basis of technical quality, originality, and clarity of presentation.
                <span className="font-semibold">
                    Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements. (Conference Id: XXXX, Approval Pending)
                </span>.
            </p> */}

            <Tracks></Tracks>
            <Dates></Dates>

            {/* Author Guideline */}
            <h2 className="text-xl mt-8 font-semibold opacity-0 [animation:fadeIn_0.8s_ease-in-out_forwards]">
                Author Guidelines 
            </h2>
            <div className="divider divider-error my-1 opacity-0 [animation:slideInLeft_0.6s_ease-in-out_0.3s_forwards]"></div>
            <div className="my-6 ml-6">
                <ul className="text-base sm:text-lg list-disc ml-5 space-y-3 text-justify">
                    <li>
                        Make sure that no part of this paper (including Figure/Table/Algorithm) is copied from other sources. Make sure that you did not do any plagiarism or self-plagiarism?
                        <span className="font-semibold"> The similarity shall be less than 30% (Overall) and more than 4% from a single source.</span>
                    </li>
                    <li>
                        The papers will be reviewed by the program committee and the authors will be notified of the decision. The authors should also ensure that the submitted papers are free from any errors and that the formatting is correct.
                    </li>
                </ul>
            </div>

            {/* Submission Guidelines  */}
            <h2 className="text-xl mt-8 font-semibold opacity-0 [animation:fadeIn_0.8s_ease-in-out_forwards]">
                Submission Guidelines 
            </h2>
            <div className="divider my-1 divider-error opacity-0 [animation:slideInLeft_0.6s_ease-in-out_0.3s_forwards]"></div>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Before submission</h3>
                    <ul className="list-disc ml-10 text-base sm:text-lg text-justify">
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
                    <ul className="list-disc ml-10 text-base sm:text-lg text-justify">
                        <li>
                            The authors should not include their names, affiliations, postal addresses, and email addresses in the initial manuscript. If it is not maintained the manuscript will be immediately rejected.
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Manuscript Template</h3>
                    <ul className="list-disc ml-10 text-base sm:text-lg text-justify">
                        <li>
                            Submissions must follow standard IEEE conference templates (Please download and use A4 Size Template). The manuscript template is provided on the website or can be downloaded from IEEE website:
                            <a className="font-bold text-[#923330] hover:underline" href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer"> Click Here</a>.
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Microsoft CMT Submission</h3>
                    <ul className="list-disc ml-10 text-base sm:text-lg text-justify">
                        <li>
                            Each paper needs to be submitted electronically as a single PDF file through Microsoft CMT:
                            <a className="font-bold text-[#923330] hover:underline" href="https://cmt3.research.microsoft.com/NCIM2025/" target="_blank" rel="noopener noreferrer"> Click Here</a>.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Animations embedded directly in component */}
            <style jsx>{`
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
            `}</style>
        </div>
    );
};

export default CallPaper;