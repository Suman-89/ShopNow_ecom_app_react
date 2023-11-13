import './App.css';
import ComponentRoute from './ComponentRoute';
import ToastMessageComp from './components/ToastMessageComp';
import DashboardPage from './e-shop/DashboardPage';
import LoginPage from './e-shop/LoginPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



function App() {

  // const getUser  = JSON.parse(localStorage.getItem("userData"));
  //   console.log(
  //       'get user app -->',getUser
  //   )
  return (
    <div className='App'>
      <ToastMessageComp/>
      <Router>
      <ComponentRoute/>
      </Router>      
    </div>
  );
}

export default App;
