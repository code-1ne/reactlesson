import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import '../styles/App.css'
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';

export default function AppRouter() {
    return (
        <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<PostIdPage />} />
            <Route path="/error" element={<Error />} />
            <Route path="/*" element={<Navigate to="/error" replace />} />
        </Routes>
    )
}
