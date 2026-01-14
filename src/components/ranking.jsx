import { useState,useEffect } from "react";
import axios from 'axios';

function Ranking(){
    const[users,setusers]=useState([]);
    async function getRank(){
        const {data}= await axios.get('http://localhost:4000/users/perform');
        setusers(data);
    }

    useEffect(()=>{
        getRank();
    },[])

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Math</th>
                        <th>Physics</th>
                        <th>Computer Sciences</th>
                        <th>Average</th>
                        

                    </tr>
                </thead>

                {users.map((user)=>(
                   <tbody key={user._id}>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.scores.Math}</td>
                            <td>{user.scores.Physics}</td>
                            <td>{user.scores.ComputerScience}</td>
                            <td>{user.average}</td>
                            
                           
                        </tr>
                   </tbody> 
                ))}
            </table>
        </>
    )

}
export default Ranking;