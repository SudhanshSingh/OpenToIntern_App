import { useState } from "react"
import axios from 'axios'
import { toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";

function Intern(){
    const[internData,setInternData]=useState({})

    const navigate=useNavigate()

    const onChangeHandler=(event)=>{
        setInternData({...internData,[event.target.name]:event.target.value})
        console.log(event.target.name,event.target.value)
    }

    const onSubmitHandler =  async(event)=>{
        try{
            event.preventDefault()
            console.log("data",internData)
            let response= await axios.post("http://localhost:5000/functionup/interns",internData)
            console.log("response",response.data)
            if(response.status===201){
                toast.success(response.data.message)
                setTimeout(() => navigate("/", { replace: true }), 1500);
            }
        }catch(err){
            toast.error(err.response.data.message)
        }
    }

    return(
        <div className="intern">
            <h1>Apply For Internship</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <input type="text" placeholder=" Name .." name="name" required onChange={onChangeHandler}/>
                </div>
                <div>
                    <input type="email" placeholder=" Email Id .." name="email" required onChange={onChangeHandler}/>
                </div>
                <div>
                    <input type="text" placeholder="Phone No .." name="mobile" required onChange={onChangeHandler}/>
                </div>
                <div>
                    <input type="text" placeholder="College Name (eg.iitd) .." name="collegeName" required onChange={onChangeHandler}/>
                </div>
                <div>
                    <input type="submit"/>
                    <input type="reset"/>
                </div>
            </form>
        </div>
    )
}
export default Intern