import "./About.css";
import { MdOutlineWavingHand } from 'react-icons/md';

function About(): JSX.Element {
    return (
        <div className="About">
			<h3>Hello friend <MdOutlineWavingHand/></h3>
            <p>This app present list of users. The users are presented in the form of card or table. </p>
        </div>
    );
}

export default About;
