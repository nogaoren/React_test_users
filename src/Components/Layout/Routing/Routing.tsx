import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../Pages/Home/Home";
import App from "../../../App";
import About from "../../Pages/About/About";
import UsersCards from "../../Pages/UsersCards/UsersCards";
import UsersTable from "../../Pages/UsersTable/UsersTable";
import Page404 from "../../Pages/Page404/Page404";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<App/>}/> 
                <Route path="home" element={<Home />}/> 
                <Route index element={<Home />}/>
                <Route path="about" element={<About/>}/>
                <Route path="usersCard" element={<UsersCards/>}/> 
                <Route path="usersTable" element={<UsersTable/>}/>
                <Route path="*" element={<Page404/>}/> 
            </Routes> 

        </div>
    );
}

export default Routing;
