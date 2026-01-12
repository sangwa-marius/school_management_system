import {Link}from 'react-router-dom';
function Nav(){
    return(
        <>
        <nav>

            <Link style ={{
                color:'blue',
                marginLeft:'60px',
                marginTop:'20px'
            }} to ='/'>Home</Link>
            <Link  style ={{
                color:'blue',
                marginLeft:'60px',
                marginTop:'20px'
            }}
             to ='/ranking'>Student Ranking</Link>
            <Link  style ={{
                color:'blue',
                marginLeft:'60px',
                marginTop:'20px'
            }}       
             to ='/top'>Top ten</Link>
        </nav>
        </>
    )
}

export default Nav;