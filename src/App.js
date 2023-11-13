import './App.css';
import ToastMessageComp from './components/ToastMessageComp';
import DashboardPage from './e-shop/DashboardPage';
import LoginPage from './e-shop/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <ToastMessageComp/>
      <Router>
        <Routes>
          <Route exact path='/' element={<LoginPage/>}/>
          <Route exact path='/dashboard' element={<DashboardPage/>}/>
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
