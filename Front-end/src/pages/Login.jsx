import axios from 'axios';


import { Link, useNavigate } from "react-router-dom";
import React,{useState} from 'react';

const Login = () => {

  const history = useNavigate();

    const [email,setEmail] = useState('')
    const [password,setPassword]= useState('')

    async function submit(e){
      e.preventDefault();
      try{
        await axios.post("http://localhost:3000/login",{
          email,password
        })
        .then(res =>{
          if(res.data==="exist"){
              history("/home",{state:{id:email}})
              console.log("succesful login")
          }
          else if(res.data==="notexist"){
          alert("user is not signed up")
          }
        })
        .catch(e=>{
          alert(e)
          // console.log(e)
        })
        
      }catch(e){
        console.log(e)
       }  
    }

  return (
    <div>
      <h1>
        Login
      </h1>
      <form action="POST">
      <input type="text"  onChange={(e)=>{setEmail(e.target.value)}} placeholder='name' name='' id=""/>
      <input type="text"  onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' name='' id=""/>
      <input type="submit" onClick={submit}/>
      </form>
      <Link to="/signup">Signup</Link>

    </div>
  )
}

export default Login