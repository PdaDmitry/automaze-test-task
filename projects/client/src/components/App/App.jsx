import { Route, Routes } from 'react-router-dom';
import './App.module.css';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import { Toaster } from 'react-hot-toast';

const App = () => {
  // return <div>App</div>;
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
