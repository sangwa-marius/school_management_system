import GetTop from '../components/top.jsx';
import Users from '../components/users.jsx';

function Home (){

    return(
        <>
        <div className='welcome'>
           <h2>Welcome! This is the general over view of the students in our database</h2> 
        </div>
            <Users/>
        </>
    )
}

export default Home;