import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Submit from "../pages/Submit";
import Views from "../pages/Views";
import View from "../pages/View";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="submit" element={<Submit />}/>
                <Route path="views" element={<Views />}/>
                <Route path="views/:id" element={<View />}/>
            </Routes>
        </BrowserRouter>
    )
}
  
export default Router;