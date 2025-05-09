import logo from './logo.svg';
import './App.css';
import Introduction from './pages/Introduction/Introduction';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login.js';
import SignUp from './pages/SignUp/SignUp.js';
import Youtube from './pages/Youtube/Youtube.js';
import Accordion from './components/accordion/Accordion';
import Accordion2 from './components/Accordion2/Accordion2'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/a' element={<Introduction/>}></Route>
          <Route path='/' element={<Youtube/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/a' element={<Accordion/>}></Route>          
          <Route path='/a' element={<Accordion2/>}></Route>          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{/* <Introduction/> */}
{/* <Login/> */}