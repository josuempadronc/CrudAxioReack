import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Views
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;