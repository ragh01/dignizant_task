import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) { 
        event.preventDefault();
    }
    
    return (
        <div className="Login">
          <h1><center>Login to See all Products</center></h1>  
          <hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>
          <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Link to="/products">
            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Login
            </Button>
          </Link>
          <h1>If you haven't Signed up yet</h1>
          <Link to="/register">
            <Button block size="lg" type="submit">
                SignUP
            </Button>
          </Link>
        </Form>
        </div>
        
    )
}

export default Home