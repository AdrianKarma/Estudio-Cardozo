
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './Components/Common/Footer';
import Inicio from './Components/Pages/Inicio';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Common/Menu';

function App() {


  return (
<BrowserRouter>
    <Menu></Menu>
   
    <Inicio></Inicio>
    
    <Footer></Footer>
   </BrowserRouter>
  )
}

export default App
