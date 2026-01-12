import axios from 'axios'
import {useState,useEffect} from 'react';


function Users(){
const [students, setStudents] = useState([]);
async  function getStudents(){
    const {data} = await axios.get('http://localhost:4000/users')
    console.log(data)
    setStudents(data)
   
}
useEffect(()=>{
    getStudents()
},[])

return(
    <>
    
    <div>
        <table>
                <thead>
                <tr><th>Names</th><th>Math</th><th>Physics</th><th>Chemistry</th><th>Biology</th><th>ICT</th><th>Average(%)</th></tr>
            </thead>
                
             {students.map((student)=>(
                <tbody key ={student._id}>

                 <tr>
                    <td>{student.name}</td>
                    <td>{student.scores.Math}</td>
                    <td>{student.scores.Physics}</td>
                    <td>{student.scores.Chemistry}</td>
                    <td>{student.scores.Biology}</td>
                    <td>{student.scores.ICT}</td>
                    <th>{student.average}</th>
                </tr>
                </tbody>
      
        ))
    }
     
        </table>
          
    
    </div>
    </>
)

}

export default Users;