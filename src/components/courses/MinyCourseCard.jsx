const MinyCourseCard = ({ course, isEnrolled, userData }) => {
    const handleClick = () => {
        const courseUrl = isEnrolled
            ? `/course/${course.id}/${userData.uid}`
            : `/course/${course.id}/0x00`;
        window.location.href = courseUrl;
    };

    return (
        <button
            onClick={handleClick}
            className="bg-gray-800 rounded-xl shadow-md p-4 sm:p-5 flex flex-col justify-between text-white font1 transition-transform hover:shadow-xl hover:-translate-y-1"
        >
            <h2 className="text-base sm:text-lg font-semibold mb-2 text-teal-300 line-clamp-2">
                {course.title}
            </h2>

            <ul className="flex flex-wrap gap-2 mt-2">
                {course.skills.slice(0, 5).map((skill, index) => (
                    <li
                        key={index}
                        className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-teal-400 hover:text-gray-900 transition-colors"
                    >
                        {skill.toUpperCase()}
                    </li>
                ))}
            </ul>
        </button>
    );
};

export default MinyCourseCard;
