import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu centerColumn">
            <Link to="usersCard">Users in cards</Link> 
            <Link to="usersTable">Users in table</Link> 
        </div>
    );
}

export default Menu;
