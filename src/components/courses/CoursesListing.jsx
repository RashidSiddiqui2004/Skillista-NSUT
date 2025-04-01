import React, { useContext, useEffect } from 'react'
import CourseCard from './CourseCard'
import myContext from '../../context/data/myContext'

const CoursesListing = () => {
 
    const context = useContext(myContext);
    
    const { courses, getAllCourses } = context;

    useEffect(() => {
        const fetchData = async () => {
            await getAllCourses();
        }
        fetchData();
    }, [])

    return (

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

    )
}

export default CoursesListing