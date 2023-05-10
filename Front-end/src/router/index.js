import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login'
import Signup from "../pages/Signup";
import Homepage from "../pages/Homepage";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<login/>} exact={true} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Homepage />} />
        </Routes>
    </BrowserRouter>
);

export default Router;