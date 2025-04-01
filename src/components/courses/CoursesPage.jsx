import React, { useEffect, useState } from 'react'
import girl from '/learner.jpg'
import CourseStarter from './CourseStarter'
import CoursesListing from './CoursesListing'

const CoursesPage = () => {

    const [hasFilledCourseForm, setHasFilledCourseForm] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleFormSubmit = (formData) => {
        setHasFilledCourseForm(true);
        localStorage.setItem("courseForm", JSON.stringify(formData));
    };

    useEffect(() => {

        if (localStorage.getItem("courseForm"))
            setHasFilledCourseForm(true);

    }, [])


    return (

        <div className='my-10'>

            {
                !toggle ?
                    <div className='flex flex-col sm:flex-row justify-around items-center text-center'>

                        <div className='w-screen sm:w-[50vw] text-left px-6'>
                            <h2 className='font1 text-lg font-semibold'>Welcome to, </h2>
                            <h1 className='text-5xl font1 font-extrabold stroke-slate-50 mb-2'>Skillista Course Booster</h1>
                            <h2 className='text-3xl font1 font-extrabold stroke-slate-50'>Empowering Women, Celebrating Skills</h2>
                            <h2 className='text-3xl font1 font-extrabold stroke-slate-50'> Discover Your Potential </h2>
                            <p className='text-lg my-4 font1'>Empower yourself with new skills and opportunities

                            </p>
                            <div className='flex flex-row gap-6 text-lg'>
                                <h3 className='w-fit px-10 py-3 rounded-full bg-white z-10 shadow-sm mt-9
         shadow-green-500 text-slate-950 font1 font-semibold cursor-pointer'
                                    onClick={() => { setToggle(!toggle) }}>View Amazing Courses</h3>
                            </div>

                        </div>

                        <div className='w-screen sm:w-[40vw] text-left px-6 items-center justify-center my-auto py-12'>
                            <img src={girl} alt="woman in tech" className=' rounded-full' />
                        </div>

                    </div>
                    :

                    !hasFilledCourseForm ? <CourseStarter handleFormSubmit={handleFormSubmit} /> : <CoursesListing />
            }

        </div>
    )
}

export default CoursesPage