import { useState } from "react"
import axios from 'axios'
import { toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
function College(){

    let [formData,setFormData]=useState({})
    const navigate=useNavigate()
     const onChangeHandler=(event)=>{
        setFormData({ ...formData,[event.target.name] : event.target.value})
      //  console.log(event.target.value,event.target.name)
     }
    const formDataHandler= async(e)=>{
        try{
        e.preventDefault()
        console.log("data",formData)
        let response= await axios.post('http://localhost:5000/functionup/colleges',formData)
        console.log('response',response.data)

        if(response.status===201){
            toast.success(response.data.message)
            setTimeout(() => navigate("/", { replace: true }), 1500);
        }
     
    }catch(err){
        toast.error(err.response.data.message)

    }
    }

   
    return(

        <div className="college">
            <b> your college is  not registered?</b>
            <br/>
            <b>please register college .</b>
            <form onSubmit={formDataHandler}>
                <div>
                <input type="text"  placeholder=" Enter college (eg. iitd) .." name="name" onChange={onChangeHandler} required  />
                </div>
                <br></br>
                <div>
                <input type="text"  placeholder=" Enter college fullName .." name="fullName" onChange={onChangeHandler} required  />
                </div>
                <br/>
                <div>
                <input type="text"  placeholder=" Enter logoLink .." name="logoLink" onChange={onChangeHandler} required  />
                </div>
                <input type="submit" ></input>
                <input type='reset'/>
            </form>
           
        </div>
    )
}
export default College