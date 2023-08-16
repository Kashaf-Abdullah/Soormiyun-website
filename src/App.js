
import './App.css';
import {BrowserRouter as Router,Routes,Switch,Route} from 'react-router-dom';

import Navbars from './components/Navbar/Navbars';
import Home from './components/HOME/Home';
import Contact from './components/Contact/Contact';
import JoinUs from './components/JoinUs/JoinUs';

import CombinedForm from './CombineForm';
import CardsData from './components/CardsData/CardsData';


function App() {
  return (
 
    <Router>
    <Navbars/>
   
    <Routes>
   
    <Route path="/" element={<Home/>}></Route>
   <Route path="/contactus" element={<Contact></Contact>}></Route>
   
   <Route path="/apply" element={<CombinedForm/>}></Route>
   <Route path="/showall" element={<CardsData/>}></Route>
   
   
   </Routes>
   
    </Router>
   
  );
}

export default App;
