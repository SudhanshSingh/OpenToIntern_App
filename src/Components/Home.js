import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

 import axios from 'axios'
// import {toast} from 'react-toastify';

function Home(){
    const navigate=useNavigate()
    const navToPage=(url)=>{
        navigate(url)
    }
    const[college,setCollege]=useState([])
     useEffect(()=>{
        getAllCollege()
     })

     const getAllCollege=async ()=>{
        let response=await axios.get('http://localhost:5000/functionup/allCollegeDetails')
       // console.log(response.data.data)
        setCollege(response.data.data)
     }
return(
    <div className="home">
        <h1>Welcome To OpenToIntern </h1>
        <div>
        {/* <button onClick={onClickHandler}>Available Colleges</button> */}
        <button onClick={()=>{navToPage("/createIntern")}} >Create Intern</button>
        
        <button onClick={()=>{navToPage('/createCollege')}}>Register College</button>
        </div>
      
            {college&& college.map((each)=><div>{each.fullName}</div>)}
        
        
    </div>
)
}

export default Home