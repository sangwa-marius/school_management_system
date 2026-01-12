import axios from 'axios'
import { useState,useEffect } from 'react'

function GetTop(){
    const [top,setTop]=useState([]);
    async function getTopStudents(){
        const {data}= await axios.get('http://localhost:4000/users/perform/top') ;
        console.log(data)
        setTop(data)
    }
    useEffect(()=>{
        getTopStudents();
    },[]);

    return (
        <>
            <table>
                <thead>
                    <tr>
                    
                        <th>Names</th>
                        <th>Average</th>
                    </tr>
                </thead>

                {top.map((user)=>(
                    <tbody key={user._id}>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.average}</td>
                            </tr>
                    </tbody>
                ))}
            </table>
        </>
    )
}

export default GetTop;