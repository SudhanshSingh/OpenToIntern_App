import{BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import College from './Components/College';
import Contact from './Components/Contact';
import Hireintern from './Components/Hireintern';
import Home from './Components/Home';
import Intern from './Components/Intern';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <ToastContainer position='top-center'/>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/createintern' element={<Intern/>}></Route>
        <Route path='/createcollege' element={< College/>}/>
        <Route path='/filter' element={<Hireintern/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
    </BrowserRouter>
        </div>
  );
}

export default App;
