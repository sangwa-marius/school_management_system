import './App.css'
import Home from './pages/home.jsx'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Ranking from './components/ranking.jsx'
import GetTop from './components/top.jsx';
import Nav from './components/nav.jsx';
import Add from './components/add.jsx';



function App(){
  return(
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path ='/' element ={<Home/>}/>
          <Route path ='/ranking' element ={<Ranking/>}/>
          <Route path ='/top' element ={<GetTop/>}/>
          <Route path ='/add' element ={<Add/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;