import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import { toast } from "react-toastify";

const CourseCard = ({ course, isEnrolled }) => {

    const context = useContext(myContext);
    const { enrollCourse } = context;

    const cardClasses = 'bg-gray-800 rounded-md shadow-md p-4 flex-grow h-full text-white font1';
    const buttonClasses = 'px-4 py-2 rounded-md hover:scale-95 transition-all focus:outline-none cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2';

    const userData = JSON.parse(localStorage.getItem('user'));

    const enrollCourseFn = async () => {

        if (userData.uid === null || userData.uid === undefined) {
            toast.info('Please register with Us to continue')
        } else {
            const isdone = await enrollCourse(userData?.uid, course.id);
        }

    }

    return (
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between h-full text-white font1 transition-all hover:shadow-2xl hover:-translate-y-1">
            {/* Course Title */}
            <h2 className="text-xl font-bold mb-3 text-teal-300">{course.title}</h2>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-4">{course.description}</p>

            {/* Skills */}
            <ul className="flex flex-wrap gap-2 mb-4">
                {course.skills.map((skill, index) => (
                    <li
                        key={index}
                        className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium transition-all hover:bg-teal-400 hover:text-gray-900"
                    >
                        {skill.toUpperCase()}
                    </li>
                ))}
            </ul>

            {/* Buttons */}
            <div className="flex justify-center items-center gap-4 mt-auto">
                {!isEnrolled && (
                    <button
                        className="px-5 py-2 rounded-lg bg-teal-500 text-white font-semibold transition-all hover:bg-teal-600 hover:scale-95 focus:ring-2 focus:ring-teal-400"
                        onClick={enrollCourseFn}
                    >
                        Enroll Now
                    </button>
                )}

                <button
                    className="px-5 py-2 rounded-lg bg-gray-900 text-white font-semibold transition-all hover:bg-gray-700 hover:scale-95 focus:ring-2 focus:ring-gray-500"
                    onClick={() => {
                        const courseUrl = isEnrolled
                            ? `/course/${course.id}/${userData.uid}`
                            : `/course/${course.id}/0x00`;
                        window.location.href = courseUrl;
                    }}
                >
                    View Course
                </button>
            </div>
        </div>
    );
};

export default CourseCard;