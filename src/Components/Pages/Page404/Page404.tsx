import { Link } from "react-router-dom";
import "./Page404.css";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
			<div className="Page404">
                <h3>Sorry, the page you were looking for is currently unavailable. But do not worry! Our sharpest minds are working on it right now...</h3>
                <div className="centerColumn">
                    <iframe 
                    src="https://giphy.com/embed/6Gxp8aXE13HYk" 
                    width="480" 
                    height="314" 
                    frameBorder="0" 
                    allowFullScreen
                    title="page404"></iframe>
                </div>
                <p>Until it is ready, would you like to go back to the <Link to="home">Home</Link> page?</p>
            </div>
        </div>
    );
}

export default Page404;
