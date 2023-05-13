import { Link } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header centerColumn">
			<h2>The users app</h2>
            <div className="centerRow menuList">
                <Link to="home">Home</Link>
                <Link to="about">About</Link>
            </div>
        </div>
    );
}

export default Header;
