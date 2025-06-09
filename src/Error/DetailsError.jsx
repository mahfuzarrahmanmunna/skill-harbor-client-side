import { Fade } from "react-awesome-reveal";
import { BiLeftArrow } from "react-icons/bi";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { Tooltip } from "react-tooltip";

const DetailsError = () => {
    return (
        <Fade direction="top-left">
            <div className="flex items-center justify-center py-12 z-0 px-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center space-y-6">
                    {/* Lottie animation */}
                    <iframe className="w-full h-full bg-gray-200 rounded-2xl" src="https://lottie.host/embed/3861143a-6412-48f9-a525-14cbbd8077b5/JDEG5pexN8.lottie"></iframe>

                    {/* Typewriter title */}
                    <h2 className="text-2xl font-bold text-red-500">
                        <Typewriter
                            words={["Oops!", "Something wrong..", "No match found"]}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h2>

                    {/* Tooltip trigger */}
                    <p
                        className="text-gray-600 underline cursor-help"
                        data-tooltip-id="error-tooltip"
                        data-tooltip-content="The ID or pathname doesn't match any data."
                    >
                        Why am I seeing this?
                    </p>
                    <Tooltip id="error-tooltip" />

                    {/* Go Home button */}
                    <Link
                        to="/all-course"
                        className="btn btn-primary transition"
                    >
                        <BiLeftArrow /> Go Back to all course
                    </Link>
                </div>
            </div>
        </Fade>
    );
};

export default DetailsError;