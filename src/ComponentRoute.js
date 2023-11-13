import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './e-shop/LoginPage'
import CartPage from './e-shop/CartPage'
import NewDashboard from './e-shop/NewDashboard'



const ComponentRoute = () => {

    const getUser = JSON.parse(localStorage.getItem("userData"));
    console.log('userData-->', getUser);

    function PrivateRoute({ children }) {
        const getUser = JSON.parse(localStorage.getItem("userData"));
        console.log('userData-->', getUser);
        return getUser !== null ? (
          <>{children}</>
        ) : (
          <>
            <Navigate to="/login" />
          </>
        );
    }

    function PublicRoute({ children }) {
        const getUser = JSON.parse(localStorage.getItem("userData"));


        return getUser === null ? (
          <>{children}</>
        ) : (
          <>
            <Navigate to="/" />
          </>
        );
    }




    return (
        <div>
            <Routes>
                <Route exact path='/login' element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />
                <Route exact path='/' element={
                    <PrivateRoute>
                        <NewDashboard />
                    </PrivateRoute>
                } />
                 <Route exact path='/cart' element={
                    <PrivateRoute>
                        <CartPage />
                    </PrivateRoute>
                } />
            </Routes>
        </div>
    )
}

export default ComponentRoute
