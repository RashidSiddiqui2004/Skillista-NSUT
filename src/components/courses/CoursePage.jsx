
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import Wrapper from '../Wrapper';

const CoursePage = () => {

    const params = useParams();
    const courseId = params.id;
    const token = params.token;

    const [isEnrolled, setisEnrolled] = useState(!(token === '0x00'));

    const [courseData, setCrsData] = useState(null);

    const context = useContext(myContext);

    const { getCourseData, enrollCourse, isEnrolledinCourse } = context;

    const userData = JSON.parse(localStorage.getItem('user'));

    const enrollCourseFn = async () => {

        if (userData.uid === null || userData.uid === undefined) {
            toast.info('Please register with Us to continue')
        } else {
            const isdone = await enrollCourse(userData?.uid, courseId);
            if (isdone) {
                setisEnrolled(true);
            }
        }
    }

    const dummyChapters = [
        {
            title: "Introduction to Course", videoUrl: "Vi9bxu-M-ag?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD", description: "Are you interested in becoming a Full Stack Web Developer using MERN stack? Look no further! In this tutorial series, we'll cover everything you need to know to become a Full Stack Web Developer using MongoDB, Express, React, and Node.js.",
            resources: [
                { title: "Sklearn Linear Regression Docs", url: "https://scikit-learn.org/stable/modules/linear_model.html" },
                { title: "Gradient Descent Visualizer", url: "https://www.desmos.com/calculator" },
            ],
            downloads: [
                { label: "Lecture Slides (PDF)", url: "/downloads/linear-regression-slides.pdf" },
                { label: "Cheatsheet", url: "/downloads/linear-regression-cheatsheet.pdf" },
            ],
        },
        {
            title: "Setting Up Your Environment", videoUrl: "aRUhd1Wd3Sw?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD", description: "Are you new to web development and want to learn the fundamentals? In this video, we'll cover the basics of the internet, networks, the World Wide Web, clients, servers, browsers, and browser engines. By the end of this video, you'll have a solid understanding of these key concepts and be ready to dive deeper into web development.",
            resources: [
                { title: "Sklearn Linear Regression Docs", url: "https://scikit-learn.org/stable/modules/linear_model.html" },
                { title: "Gradient Descent Visualizer", url: "https://www.desmos.com/calculator" },
            ],
            downloads: [
                { label: "Lecture Slides (PDF)", url: "/downloads/linear-regression-slides.pdf" },
                { label: "Cheatsheet", url: "/downloads/linear-regression-cheatsheet.pdf" },
            ],
        },
        {
            title: "Core Concepts & Architecture", videoUrl: "0gU-qrq3gjU?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD", description: "Welcome to our comprehensive web development course using the MERN stack! In this video, we delve into the fascinating world of in CSS by creating a Recipe Website.",
            resources: [
                { title: "Sklearn Linear Regression Docs", url: "https://scikit-learn.org/stable/modules/linear_model.html" },
                { title: "Gradient Descent Visualizer", url: "https://www.desmos.com/calculator" },
            ],
            downloads: [
                { label: "Lecture Slides (PDF)", url: "/downloads/linear-regression-slides.pdf" },
                { label: "Cheatsheet", url: "/downloads/linear-regression-cheatsheet.pdf" },
            ],
        },
        {
            title: "Hands-on Project Demo", videoUrl: "ILxYkSVU9-k?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD", description: "Welcome to our comprehensive web development course using the MERN stack! In this video, we delve into the fascinating world of in CSS by creating a Recipe Website.",
            resources: [
                { title: "Sklearn Linear Regression Docs", url: "https://scikit-learn.org/stable/modules/linear_model.html" },
                { title: "Gradient Descent Visualizer", url: "https://www.desmos.com/calculator" },
            ],
            downloads: [
                { label: "Lecture Slides (PDF)", url: "/downloads/linear-regression-slides.pdf" },
                { label: "Cheatsheet", url: "/downloads/linear-regression-cheatsheet.pdf" },
            ],
        },
    ];

    const [currentChapter, setCurrentChapter] = useState(0);
    const chapter = dummyChapters[currentChapter];

    useEffect(() => {
        const getData = async () => {
            const temp = await getCourseData(courseId);
            setCrsData(temp);
            const isEnrolledToCourse = await isEnrolledinCourse(userData.uid, courseId);

            if (isEnrolledToCourse) { setisEnrolled(true); }
        }

        window.scrollTo(0, 0);

        getData();
    }, [])

    return (
        <Wrapper>
            <div className="grid grid-cols-12 border-2 rounded-md">

                <aside className="col-span-12 sm:col-span-3 overflow-y-auto px-4 border-r border-gray-300
                 min-h-screen py-10 my-0 bg-gray-800">
                    <h2 className="text-xl font-semibold mb-4">Course Content</h2>
                    <ul className="flex flex-col gap-3">
                        {dummyChapters.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => setCurrentChapter(index)}
                                className={`cursor-pointer px-3 py-2 rounded-md transition-all 
                ${index === currentChapter
                                        ? "bg-blue-600 text-white font-semibold"
                                        : "bg-white text-slate-700 hover:bg-blue-100"}`}
                            >
                                {index + 1}. {item.title}
                            </li>
                        ))}
                    </ul>
                </aside>


                <main className="col-span-12 sm:col-span-9 p-6 overflow-y-auto my-4 flex flex-col gap-8">

                    <div className='grid grid-cols-2 gap-4'>
                        <div className="aspect-video rounded-3xl overflow-hidden shadow-xl
                        border border-slate-700">
                            <iframe
                                src={`https://www.youtube.com/embed/${chapter.videoUrl}`}
                                title={chapter.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>

                        <div className="text-left">
                            <h1 className="text-xl font-bold text-slate-100 mb-2">{chapter.title}</h1>
                            <p className="text-sm text-slate-300 leading-relaxed tracking-wide">
                                {chapter.description}
                            </p>
                        </div>
                    </div>

                    <div className="text-left">
                        <h2 className="text-xl font-semibold text-slate-200 mb-2">Resources</h2>
                        <ul className="list-disc ml-5 space-y-1 text-slate-300 text-base">
                            {chapter.resources?.map((resource, i) => (
                                <li key={i}>
                                    <a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline"
                                    >
                                        {resource.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-left">
                        <h2 className="text-xl font-semibold text-slate-200 mb-2">Downloads</h2>
                        <ul className="space-y-2">
                            {chapter.downloads?.map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.url}
                                        download
                                        className="inline-block px-4 py-2 bg-slate-800 text-slate-100 max-w-xs w-full rounded-md hover:bg-slate-700 transition"
                                    >
                                        📄 {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </main>

            </div>

        </Wrapper>
    )
}

export default CoursePage