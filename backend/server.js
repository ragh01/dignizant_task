import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Product from "./dbProduct.js";
import Users from "./dbUser.js";

//app config

const app =express();
const port = process.env.PORT || 8080;

//middleware

app.use(express.json());
app.use(cors());

//DB Config 
const connectionURL = "mongodb+srv://admin:admin@cluster0.edyes.mongodb.net/dignizantDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionURL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//api routes
app.get('/',(req,res) => {
    res.status(200).send("Hello I AM here biyatch");
});

app.post('/signup',(req,res) =>{
    const body = req.body;
    
    Users.create(body,(err,data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await Users.findOne({ email })
        if (!user) {
            throw new Error('Unable to login')
        }
        res.send({ user})
    } catch (e) {
        res.status(400).send()
    }
})

app.post('/upload', (req,res)=>{
    const body = req.body;
    
    Product.create(body, (err,data) => {
        if(err){
            res.status(500).send(err);
        }else {
            res.status(201).send(data);
        }
    })
});

app.get('/view' , (req,res) => {
    Product.find({} , (err,data) => {
        if(err){
            res.status(500).send(err);
        }else {
            res.status(200).send(data);
        }
    })
})

//Listner
app.listen(port , ()=> console.log(`App is listening on port ${port}`)); 