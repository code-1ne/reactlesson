import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import '../styles/App.css'
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

export default function AppRouter() {
    const {isAuth, isLoading}= useContext(AuthContext);

    if(isLoading){
        return <Loader/>
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route => (
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                    />
                ))}
                <Route path="/*" element={<Navigate to="/posts" replace />} />
            </Routes>
            : <Routes>
                {publicRoutes.map(route => (
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                    />
                ))}
                <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>
    );
}