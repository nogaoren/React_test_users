import moment from "moment";
import { Result } from "../../../Models/UserModel";
import "./Card.css";

interface CardProps{
    card: Result;
}

function Card(props: CardProps): JSX.Element {
    return (
        <div className="Card border">
            <div className="centerColumn">
                <p>ID: {props.card.id.value}</p>
                <p>Name: {props.card.name.title} {props.card.name.first} {props.card.name.last}</p>
                <p>Email: {props.card.email}</p>
                <p>Date of birth: {moment(props.card.dob.date).format("DD/MM/yyyy")}</p>
                <p>Age: {props.card.dob.age}</p>
                <p>Address: {props.card.location.street.name}, {props.card.location.city}, {props.card.location.country}</p>
                <div className="centerColumn">
                    <img src={props.card.picture.medium} alt={props.card.name.last} className="border"/>
                </div>
            </div>
        </div>
    );
}

export default Card;
