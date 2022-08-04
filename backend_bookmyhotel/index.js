// const express = require("express");
// const app = express();
// const mongoose = require("mongoose")
// const  dotenv =  require("dotenv")
// const userRoute = require('./routes/user');
// const authRoute = require('./routes/auth');
// const cartRoute = require('./routes/cart');
// const productRoute = require('./routes/product');
// const orderRoute = require('./routes/order');
// const cors = require("cors")


// dotenv .config();
// mongoose.connect("mongodb://localhost:27017/shop-api",{
    
// }).then(() => {
//     console.log("connection is success");
// }).catch((e)=>{
//     console.log("no connection");
// })
// app.use(cors());
// app.use(express.json())
// app.use("/api/auth",authRoute)
// app.use("/api/user",userRoute)
// app.use("/api/product",productRoute)
// app.use("/api/cart",cartRoute)
// app.use("/api/order",orderRoute)

const express =  require("express");
require("./db/connection")
// const hotels  = require("./models/Hotels")
const app = express();
const hotelRoute = require('./routers/Hotels')
const catogoryRoute = require('./routers/Catogories')

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/hotels',hotelRoute)
app.use('/api/Catogories',catogoryRoute)





app.listen(5000,()=> {
    console.log("backend is runing on from hjhfjhdd new  5000");
})
