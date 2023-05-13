import { useEffect, useState } from "react";
import { Result, Root } from "../../../Models/UserModel";
import "./UsersCards.css";
import axios from "axios";
import Card from "../../Shared/Card/Card";

function UsersCards(): JSX.Element {
    const [user, setUser] = useState<Result[]>([]);
    const [searchName, setSearchName] = useState<string>('');
    const [searchDate, setSearchDate] = useState<string>('');

    useEffect(() => {
        axios.get<Root>('https://randomuser.me/api/?results=10')
            .then(res => {setUser(res.data.results);})
            .catch(err => {console.log('Data filed to load');})
    }, []);

    const resetSearch = () => {
        setSearchName("");
        setSearchDate("");
    };

    return (
        <div className="UsersCards">
            <div className="searchBar centerColumn">
                <h3>Users list</h3>
                <div className="centerRow">
                    <div className="centerColumn labelInput">
                        <label className="bold">Search user's name</label>
                        <input type="text" placeholder="Users's first or last name" className="border" value={searchName} onChange={(e) => setSearchName(e.target.value.toLowerCase())}/>
                    </div>
                    <div className="centerColumn labelInput">
                        <label className="bold">Search user's date of birth</label>
                        <input type="date" placeholder="Users's birthday" className="border" value={searchDate} onChange={(e) => setSearchDate(e.target.value)}/>
                    </div>
                    <div className="centerColumn labelInput">
                        <label className="bold">&nbsp;</label>
                        <button type="reset" className="btn border" onClick={resetSearch}>Reset</button>
                    </div>
                </div>
            </div>
            <div className="centerRow">
                {user.filter(u => (u.name.first.toLowerCase().includes(searchName) || u.name.last.toLowerCase().includes(searchName)) && (u.dob.date.includes(searchDate)))
                .map(u => <Card key={u.id.value} card={u}/>)}
			</div>
        </div>
    );
}

export default UsersCards;
