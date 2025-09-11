import { useLocation } from 'react-router-dom';
import DownloadTemplate from "./DownloadTemplate";
import Guideline from "./Guideline";
import ImportantDates from "./ImportantDates";

const SubmissionPage = () => {
    const location = useLocation();

    const renderContent = () => {
        switch (location.pathname) {
            case '/submission-important-dates':
                return <ImportantDates />;
            case '/download-template':
                return <DownloadTemplate />;
            case '/paper-submission-guidelines':
                return <Guideline />;
            default:
                // Default view when accessing the parent '/submission' route
                return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-20">
                        <ImportantDates />
                        <DownloadTemplate />
                        <Guideline />
                    </div>
                );
        }
    };

    return (
        <div className="my-8 md:my-16">
            {renderContent()}

            {/* Include the global styles if they're not already in your layout */}
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

export default SubmissionPage;