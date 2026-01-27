import axios from 'axios'
import {useState,useEffect} from 'react';


function Users(){
const [students, setStudents] = useState([]);
async  function getStudents(){
    const {data} = await axios.get('http://localhost:4000/users')
    setStudents(data)
   
}
useEffect(()=>{
    getStudents()
},[])

return(
    <>
    
    
        <table>
                <thead>
                <tr>
                    <th>Names</th>
                    <th>Math</th>
                    <th>Physics</th>
                    <th>Computer Sciences</th>
                    <th>Average(%)</th></tr>
            </thead>
                
             {students.map((student)=>(
                <tbody key ={student._id}>

                 <tr>
                    <td>{student.name}</td>
                    <td>{student.scores.Math}</td>
                    <td>{student.scores.Physics}</td>
                    <td>{student.scores.ComputerScience }</td>
                    <th>{student.average}</th>
                </tr>
                </tbody>
      
        ))
    }
     
        </table>
          
    
    
    </>
)

}

export default Users;