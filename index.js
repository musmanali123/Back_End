//import express from "express";import path from "path";

//const app = express();

// Setting UP Engine
//app.set("view engine","ejs")
//app.use(express.static(path.join(path.resolve(),"public")))
//@pp.use(0). statically
// USING Middle_ware
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render("index",{name:'Test_User'})
})
// REDIRECT _API
app.get('/success',(req,res)=>{
    res.render("success")
})

// POST
app.post("/contact", (req,res)=>{
console.log("POST_CHANGES =>",req.body);
// res.render('success')
//BY URL_ REDIRECTION
res.redirect('/success')
})

app.listen(3000,()=>{
    console.log("SERVER IS WORKING")
})
