let express = require("express")
// let Data = require("./Data")


let fs=require("fs")
// console.log(Data)
let app = express()
let Port=3001;
let fis=JSON.parse(fs.readFileSync("./Data.json","utf-8"))
const cors = require('cors');
app.use(cors({origin: '*'}));
app.get('/',(req,res)=>{
    res.json({fis})
})

app.listen(Port,()=>{
    console.log(`Server started on Port ${Port}`)
})