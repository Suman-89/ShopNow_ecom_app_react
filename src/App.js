import './App.css';
import ToastMessageComp from './components/ToastMessageComp';
import DashboardPage from './e-shop/DashboardPage';
import LoginPage from './e-shop/LoginPage';

function App() {
  return (
    <div className='App'>
      <ToastMessageComp/>
      {/* <LoginPage /> */}
      <DashboardPage/>
    </div>
  );
}

export default App;
