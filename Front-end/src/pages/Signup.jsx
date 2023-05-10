import React,{useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
  const Signup = () =>{
  const history = useNavigate();
  const [email,setEmail] = useState('')
  const [password,setPassword]= useState('')

    async function submit(e){
      e.preventDefault();
      try{
        await axios.post("http://localhost:3000/signup",{
          email,password
        })
        .then(res =>{
          if(res.data==="exist"){
               alert("user already exist")
          }
          else if(res.data ==="notexist"){
            history("/home",{state:{id:email}})
          }
        })
        .catch(e=>{
          alert("wrong details")
          console.log(e)
        })
        
      }catch(e){
        console.log(e)
      }  
    }

  return (
    <div>
      <h1>
        Signup
      </h1>
      <form action="POST">
      <input type="text"  onChange={(e)=>{setEmail(e.target.value)}} placeholder='name' name='' id=""/>
      <input type="text"  onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' name='' id=""/>
      <input type="submit" onClick={submit}/>
      </form>
      <Link to="/Login">Login</Link>

    </div>
  )
}

export default Signup