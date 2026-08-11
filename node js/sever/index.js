// const http=require('http');
// const port=2000;

// const server=http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/html');
//     res.end('<h1>Hello from node js</h1>');
// });
// server.listen(port,()=>{
//     console.log(`Server is running on ${port}`);
// });


const express=require("express");
const app=express();
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://samarthjadhav1033_db_user:JQiGlNUiQcCI8XVO@cluster0.7jzf7yp.mongodb.net/?appName=Cluster0")
.then(()=>{
console.log("data base connected");

})
.catch(()=>{
    console.log("err");
    
}

)

app.get("/",(req,res)=>{
    res.send("hello from express js")
})

app.get("/home",(req,res)=>{
    res.send("hello from home page")
})

app.listen(3000,()=>{
    console.log(" server is listening on port 3000");

})


