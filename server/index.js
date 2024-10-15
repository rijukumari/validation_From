const express = require('express');
const User = require('./models/usermodel');
const connectDB = require('./config/userdb');
const router = require('./router/userrouter');
const cors = require('cors')


const app = express();
app.use(express.json())
app.use(cors())

app.use('/',router)

app.get('/',(req,res)=>{
    res.send('Hello')
})
connectDB()
app.listen(3001,()=>{
    console.log("server start")
    
})
 