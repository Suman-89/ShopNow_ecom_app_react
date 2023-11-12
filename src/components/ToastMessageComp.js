import React from 'react'
import { ToastContainer } from 'react-toastify'

const ToastMessageComp = () => {
    return (
        <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    )
}

export default ToastMessageComp
