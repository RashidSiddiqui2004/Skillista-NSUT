import React, { useContext, useEffect } from 'react'
import CourseCard from './CourseCard'
import myContext from '../../context/data/myContext'

const CoursesListing = () => {

    const context = useContext(myContext);

    const { courses, getAllCourses, recommendedCourses, getRecommendedCourses } = context;

    useEffect(() => {
        const formResponse = localStorage.getItem("courseForm");

        const jsonifiedResponse = JSON.parse(formResponse);

        const formResponses = [jsonifiedResponse["What brings you to Skillista Course Booster?"],
        jsonifiedResponse["What tech stack would you like to learn?"],
        jsonifiedResponse["What is your experience level?"]];

        const fetchData = async () => {
            await getRecommendedCourses(formResponses);
            await getAllCourses();
        }
        fetchData();
    }, [])

    return (
        <>

            <h1 className='text-left font-serif text-2xl ml-4'>
                Recommended Courses
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 py-5' id='courses'>
                {
                    recommendedCourses.map((course, index) => {
                        return (
                            <div key={index} className='col-span-1'>
                                <CourseCard course={course} isEnrolled={false} />
                            </div>

                        )
                    })
                }
            </div>

            <h1 className='text-left font-serif text-2xl ml-4'>
                All Courses
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 py-5' id='courses'>
                {
                    courses.map((course, index) => {
                        return (
                            <div key={index} className='col-span-1'>
                                <CourseCard course={course} isEnrolled={false} />
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}

export default CoursesListing