 import React,{useState, useEffect} from 'react'
 import axios from 'axios';

 
 const App = () => {
   
    const [name, setName] = useState("");

  useEffect(() => {
    axios.get('https://backend-server-jade.vercel.app/home')
      .then((response) => {
        setName(response.data); // Set the entire response as the 'name'
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Fetching API with Axios</h1>
      <p>API Response: {name}</p>
    </>
  );
   
 }
 
 export default App
 