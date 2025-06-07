const express =  require("express");
const app = express();
const session =  require("express-session");
const flash = require("connect-flash")

 const sessionOptions= {
    secret:"helloworld",
    resave:false,
saveUninitialized:true,
};

app.use(session(sessionOptions));
app.use(flash())

app.get("/register", (req,res)=>{
    let {name = "anonymous"} = req.query;
    req.session.name = name; 
    console.log(req.session.name);
    res.send(name);
})

app.get("/hello",(req,res)=>{
    res.send(`hello,${req.session.name}`)
})


// app.get("/recount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;

//     }else{
//         req.session.count = 1;
//     }

//     res.send(`You sent a request ${req.session.count} times`);
// })

app.get("/test",(req,res)=>{
    res.send("test successful!");
})
 
app.listen(3000, ()=>{
    console.log("server running")
})