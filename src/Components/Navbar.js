import{NavLink} from 'react-router-dom'
import "./Navbar.css"
function Navbar(){
return(
    <div className="nav">
        <div className='heading'>
        <h1>Open To Intern</h1>
        </div>
         <div className="navbar">
            <ul >
                <li><NavLink to={"/"} className={"navbar-link"}>HomePage</NavLink></li>
                <li><NavLink to={'/createcollege'} className={"navbar-link"}>Register</NavLink></li>
                <li><NavLink to={'/createintern'} className={"navbar-link"}>Apply</NavLink></li>
                <li><NavLink to={'/filter'} className={"navbar-link"}>HireInterns</NavLink></li>
                <li><NavLink to={'/contact'} className={"navbar-link"}>ContactUs</NavLink></li>
            </ul>
        </div>

    </div>
)
}
export default Navbar