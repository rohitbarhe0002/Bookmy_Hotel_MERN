const mongoose =  require("mongoose")

mongoose.connect("mongodb://localhost:27017/Bookmyhotel-api",{
    
}).then(() => {
    console.log("connection is success for checking hghgghhg");
}).catch((e)=>{
    console.log("no connection");
})