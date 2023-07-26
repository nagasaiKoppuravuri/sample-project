import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AnnecaureA from './components/AnnecaureA/AnnecaureA';
import AnnecaureB from './components/AnnecaureB/AnnecaureB';
import AnnecaureC from './components/AnnecaureC/AnnecaureC';
import AnnecaureD from './components/AnnecaureD/AnnecaureD';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className='bg-slate-100 h-screen'>
      <BrowserRouter>
      <Routes>
        <Route path="/annexure/a" element={<AnnecaureA />}></Route>
        <Route path="/annexure/b" element={<AnnecaureB />}></Route>
        <Route path="/annexure/c" element={<AnnecaureC />}></Route>
        <Route path="/annexure/d" element={<AnnecaureD />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
