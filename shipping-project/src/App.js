import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AnnecaureA from './components/AnnecaureA/AnnecaureA';
import AnnecaureB from './components/AnnecaureB/AnnecaureB';
import AnnecaureC from './components/AnnecaureC/AnnecaureC';
import AnnecaureD from './components/AnnecaureD/AnnecaureD';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className='bg-slate-100 h-screen'>
     
      <BrowserRouter>
      <Routes>
      <Route element={<ProtectedRoute />}>
      <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/annexure/a" element={<AnnecaureA />}></Route>
        <Route path="/dashboard/annexure/b" element={<AnnecaureB />}></Route>
        <Route path="/dashboard/annexure/c" element={<AnnecaureC />}></Route>
        <Route path="/dashboard/annexure/d" element={<AnnecaureD />}></Route>
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Login />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
