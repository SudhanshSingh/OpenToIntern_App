import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Scrollbars } from 'react-custom-scrollbars-2';
import Interndata from "./Interndata";
import { useNavigate } from "react-router-dom";

function Hireintern() {
  const [query, setQuery] = useState("");
  const[resData,setResData]=useState([])

  const navigate=useNavigate()
  const onchangeHandler = (event) => {
    setQuery(event.target.value);
    //console.log(query);
  };


  // useEffect(()=>{
  //   onSubmitHandler()
  // },[])

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault()
      let response = await axios.get(
        `http://localhost:5000/functionup/collegeDetails?collegeName=${query}`
      );
      //console.log("response",response.data.message)
      if (response.status === 200) {
        setResData([...response.data.message.interns])
        toast.success(response.data.message);
        //console.log("resdata",resData)
        setTimeout(() => navigate("/", { replace: true }), 5000);
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <div className="hireIntern">
      <h1>Hire Interns From colleges</h1>

    <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder=" Enter college(eg. iitd).. "
          required
          onChange={onchangeHandler}
        ></input>
        <input type='submit'></input>
       </form>
     
   
      <div>

       <Scrollbars>
       
       </Scrollbars>
      </div>
      <div>
      {
            resData.map((data)=><Interndata  {...data}/> 
             
            )}
      </div>
    </div>
  );
}
export default Hireintern;
