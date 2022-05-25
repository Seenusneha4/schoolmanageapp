import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addstudent from './Components/Addstudent';
import Searchstudent from './Components/Searchstudent';
import Addfaculty from './Components/Addfaculty';
import Searchfaculty from './Components/Searchfaculty';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Addstudent/>}/>
      <Route path="/searchstu" exact element={<Searchstudent/>}/>
      <Route path="/addfac" exact element={<Addfaculty/>}/>
      <Route path="/searchfac" exact element={<Searchfaculty/>}/>
      <Route path="/viewstu" exact element={<Addstudent/>}/>
      <Route path="/viewfac" exact element={<Addstudent/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
