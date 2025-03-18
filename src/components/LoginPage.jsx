

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../context/data/myContext';
import { toast } from 'react-toastify';
import { auth } from '../firebase/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(myContext);

    const { loading, setLoading, getUserDetails } = context;

    const navigate = useNavigate();

    const loginSkillster = async () => {
        setLoading(true)
        try {

            const result = await signInWithEmailAndPassword(auth, email, password);

            toast.success("Login successful", {
                position: "top-right",
                autoClose: 800,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })

            const fetchUserData = await getUserDetails(result.user.uid);

            fetchUserData.uid = result.user.uid;

            localStorage.setItem('user', JSON.stringify(fetchUserData));

            navigate('/');

            setLoading(false)

        } catch (error) {
            toast.error("Login failed, Check your credentials!", {
                position: "top-right",
                autoClose: 800,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            setLoading(loading)
        }

    }


    const userData = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (userData && userData?.domain !== null && userData?.domain !== '') {
            window.location.href = `/profile/${userData?.uid}/${userData?.name}`
        }
    }, [])

    return (
        <div className='mx-auto px-4 py-8 font1'>
            <h1 className='text-3xl font-bold mb-4'>Login as Skillster</h1>

            <div className='rounded-2xl sm:mx-5 my-5 col-span-12 md:col-span-8
             flex flex-col sm:flex-row  mx-auto sm:px-10 py-8 border-2'>

                <div className='w-full sm:w-[60vw]'>

                    <div className='mb-5 flex flex-col sm:flex-row gap-4'>
                        <label htmlFor='email' className='text-white text-lg mb-1 sm:w-[18%]'>Email</label>
                        <input type="email" id='email' value={email}
                            className='bg-inherit text-slate-200 
             border-b border-slate-800 outline-none sm:px-2 rounded-md  w-[30vw]
              focus:border-blue-500' placeholder='Enter your email' onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                    <div className='mb-5 flex flex-col sm:flex-row gap-4'>
                        <label htmlFor='password' className='text-white text-lg mb-1 sm:w-[18%]'>Password</label>
                        <input type="password" id='password' value={password}
                            className='bg-inherit text-slate-200 
             border-b border-slate-800 outline-none sm:px-2 rounded-md  w-[30vw]
              focus:border-blue-500' placeholder='Enter your password' onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>


                    <p className='bg-blue-900 text-white mt-5 py-2 px-28 w-fit
           rounded-md hover:bg-blue-600 transition-colors duration-300 text-xl
           ease-in-out cursor-pointer' onClick={loginSkillster}> {!loading ? 'LogIn' : 'Logging In...'}
                    </p>

                </div>

                {/* <div className='w-full sm:w-[40vw] py-10'>
                    <div className='bg-slate-900 rounded-md shadow-md 
                        px-4 py-10 font1'>
                        <img src={profileimg} alt="profile-image"
                            className='rounded-full w-32 mx-auto' />

                        <h2 className='text-lg font-semibold pt-2 mb-2'>{fullName}</h2>
                        <h2 className='text-slate-800 bg-white px-10 py-1 mb-2 flex justify-center
             items-center mx-auto w-fit rounded-full'>Domain:{selectedDomain}</h2>
                        <h2>Experience: {experience} years</h2>
                        <div className='text-left px-2'>
                            <h3>Proficient in:</h3>
                            <ul className='list-disc ml-4'>
                                {skills?.map(skill => (
                                    <li key={skill}>{skill.toUpperCase()}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div> */}

            </div>

        </div>
    );
};

export default LoginPage