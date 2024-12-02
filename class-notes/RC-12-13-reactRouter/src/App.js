import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import Teacher from './pages/Teacher';
import CourseCard from './pages/CourseCard';
import ContactForm from './pages/ContactForm';
import Paths from './pages/Paths';
import Footer from './components/Footer';
import CardDetails from './pages/CardDetails';
import TeacherDetails from './pages/TeacherDetails';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <div>
      <AppRouter/>
    </div>
  )
}

export default App