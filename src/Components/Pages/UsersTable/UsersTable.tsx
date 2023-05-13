import { useEffect, useState } from "react";
import "./UsersTable.css";
import { Result, Root } from "../../../Models/UserModel";
import axios from "axios";
import moment from "moment";

function UsersTable(): JSX.Element {
    const [user, setUser] = useState<Result[]>([]);
    const header = ['ID', 'Full name', 'Email', 'Date of Birth', 'Age', 'Address', 'Picture'];
    const [searchName, setSearchName] = useState<string>('');
    const [searchDate, setSearchDate] = useState<string>('');

    useEffect(() => {
        axios.get<Root>('https://randomuser.me/api/?results=100')
            .then(res => {setUser(res.data.results);})
            .catch(err => {console.log('Data filed to load');})
    }, []);

    const resetSearch = () => {
        setSearchName("");
        setSearchDate("");
    };
    
    return (
        <div className="UsersTable">
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
                <table>
                    <thead>
                        <tr>
                            {header.map(h => <th key={h}>{h}</th>)}
                        </tr>
                    </thead>
                    <tbody> {
                        user.filter(u => (u.name.first.toLowerCase().includes(searchName) || u.name.last.toLowerCase().includes(searchName)) && (u.dob.date.includes(searchDate))).map(u => 
                        <tr key={u.id.name + u.name.first}>
                            <td>{u.id.name}</td>
                            <td>{u.name.title} {u.name.first} {u.name.last}</td>
                            <td>{u.email}</td>
                            <td>{moment(u.dob.date).format("DD/MM/yyyy") } </td>
                            <td>{u.dob.age}</td>
                            <td>{u.location.street.name}, {u.location.city}, {u.location.country}</td>
                            <td>
                                <img src={u.picture.medium} alt={u.name.first} />
                            </td>
                        </tr> )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UsersTable;
