
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './components/Home';
import Signup from './components/Signup';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login'; 
import RegisterShe from './components/RegisterShe';
import MyState from './context/data/myState';
import HireHer from './components/HireHer';
import Courses from './components/courses/Courses';
import ContactPage from './components/josforher/ContactPage';
import CourseAdd from './components/CourseAdd';
import CoursePage from './components/courses/CoursePage';
import MyCourses from './components/courses/MyCourses';
import ClientRegisterPage from './components/clientRegistation/ClientRegisterPage';

function App() {

  return (
    <MyState>

      <Router>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path='/signup' element={<Signup />} />

          <Route path='/login' element={<Login />} />

          <Route path='/join-skillista' element={<RegisterShe />} />

          <Route path='/hire-her' element={<HireHer />} />

          <Route path='/join-client' element={<ClientRegisterPage />} />

          <Route path='/courses-add' element={<CourseAdd />} />

          <Route path='/courses' element={<Courses />} />

          <Route path='/course/:id/:token' element={<CoursePage />} />

          <Route path='/my-courses' element={<MyCourses />} />

          <Route path='/profile/:id/:name' element={<ContactPage />} />

        </Routes>

        <ToastContainer />

      </Router>

    </MyState>

  );
}

export default App
