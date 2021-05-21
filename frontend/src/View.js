import React,{useEffect,useState} from 'react'
import Product from "./Product";
import axios from "./axios";

const View = () => {
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
        <div className="view">
        {products.map((product)=>(
          <Product 
              id={product._id}
              description={product.description}
              price={product.prod_price}
              name={product.prod_name}
              image={product.image}
            />
            ))}
        </div>
    )
}

export default View
