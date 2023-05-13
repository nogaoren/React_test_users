import "./Home.css";
import { BsEmojiSmile } from 'react-icons/bs';

function Home(): JSX.Element {
    return (
        <div className="Home">
			<div className="Home centerColumn">
                <h3>Greeting friends and welcome</h3>
                <h3>We are so happy that you are here <BsEmojiSmile/> </h3>
                <div className="centerColumn">
                <iframe 
                src="https://giphy.com/embed/EFXGvbDPhLoWs" 
                width="300"
                height="500"
                frameBorder="0" 
                allowFullScreen
                title="home"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Home;
