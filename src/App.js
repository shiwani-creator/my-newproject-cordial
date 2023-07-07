import logo from './logo.svg';
import './App.css';
import Project from './component/Project';
import { Route, Routes } from 'react-router-dom';
import Domain from './component/Domain';
import About from './component/About';
import Navbar from './Navbar';
import Footers1 from './component/Footers1';
import Contact from './component/Contact';
import Hosting from './component/Hosting';
import Choosenow from './component/Choosenow';
import Login from './component/Login';
import Homes from './component/Homes';
import Domains from './Domains';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Project/>}/>
    <Route path='/domains' element={<Domain/>}/>
    <Route path='/Aboutus' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='/hosting' element={<Hosting/>}/>
    <Route path='/choose' element={<Choosenow/>}/>
    <Route path='/login5' element={<Login/>}/>
    <Route path='/homies' element={<Homes/>}/>
    <Route path='/chooseplan' element={<Domains/>}/>

 
   </Routes>
   <Footers1/>
  

   </>
  );
}

export default App;
