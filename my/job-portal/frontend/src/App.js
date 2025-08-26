import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import ApplicationForm from './components/ApplicationForm';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/apply/:jobId" element={<ApplicationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
