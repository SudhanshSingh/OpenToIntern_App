
function Interndata({email,mobile,name}){
    console.log({email,mobile,name})
return(
    <div>
        <div>
          <p>name :<span>{name}</span></p>
        </div>
        <div>
          <p>email :<span>{email}</span></p>
        </div>
        <div>
          <p>mobile :<span>{mobile}</span></p>
        </div>
    </div>
)
}
export default Interndata