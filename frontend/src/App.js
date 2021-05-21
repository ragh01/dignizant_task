import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from "react";
import axios from "./axios.js"

function App() {
  const[products,setproducts] = useState([]);

  useEffect(()=>{
    async function fetchproducts(){
      const response = await axios.get('/view');
      setproducts(response.data);

      return response
    }
    fetchproducts();
  },[]);
  return (
    <div classname="app">
      <h1>i am frontend</h1>
      {products.map((product)=>{
        <div>
          <h1>{product.prod_name}</h1>
          <h2>{product.prod_price}</h2>
          <h2>{product.description}</h2>
          <img src={product.image} />
        </div>
      })}
    </div>
  );
}

export default App;
