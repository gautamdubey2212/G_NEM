const express = require('express');
const { connectDB } = require('./db');
const routes = require('./Route/productRoutes');
connectDB();

const app = express();

app.use(express.json());
app.use("/",routes);


app.listen(4000, ()=>{
    console.log("server is Running on Port 4000");
});