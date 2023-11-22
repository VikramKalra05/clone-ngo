import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Campaigns from "../Pages/Campaigns";
import AboutUs from "../Pages/AboutUs";
import Donate from "../Pages/Donate";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/campaigns" element={<Campaigns />}></Route>
                <Route path="/about-us" element={<AboutUs />}></Route>
                <Route path="/donate" element={<Donate />}></Route>
            </Routes>
        </div>
    )
}

export { AllRoutes }