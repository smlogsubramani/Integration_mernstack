import { useState, useEffect } from 'react';
import axios from 'axios';


const Homepage = () => {
  const [Loga, setLoga] = useState(['Loga']);

  useEffect(() => {
    axios.get('http://localhost:3000/home')
      .then(response => setLoga(response.data))
      .catch(error => console.error(error));
  }, []);


  const deleteUser=(id)=>{
    axios.delete(`http://localhost:3000/${id}`)
    .then(()=>alert("user deleted"))
    .catch((e)=>console.log(e))
 }

  return (
    <div>
      <h1>Homepage</h1>
      <p>Hello welcome to the integration of react and node with axios</p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {Loga.map(loga => (
            <tr key={loga.id}>
              <td>{loga.email}</td>
              <td>{loga.password}</td>
              <td><button className='btn btn-danger' onClick={()=>deleteUser(loga._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
   
    </div>
  );
}

export default Homepage;