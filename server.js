const express = require("express");
const { status } = require("express/lib/response");
const res = require("express/lib/response");
const app = express()
const port=1000;
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/Home',(req,res)=>{res.render("Home")})
app.get('/OurServices',(req,res)=>{res.render("OurServices")})
app.get('/ContactUs',(req,res)=>{res.render("ContactUs")})

app.use((req,res)=>{
    res.status(400).send('Error 404 not found')
}
)


let access=(req,res,next)=>{
    try {
        let day=new Date.getday()
        let hours=new Date.gethours()
        if (day>0 && day<6 && hours>9 && hours<17) {
            next();
        }
    } catch (error) {
        res.send("Working from monday to saturday and from 9 Am to 5 Pm")
    }
}
app.use(access)





app.listen(port,(err)=>err
?console.log(err)
:console.log(`The server is running on port ${1000}`) 
);
