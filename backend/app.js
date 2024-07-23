const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3001

dotenv.config();

const User = require('./models/userSchema')


app.get('/',(req,res)=> {
    res.send("Hello world from server side");
})

const DB = 'mongodb+srv://madhav005542:Akash123@cluster0.tqcj9is.mongodb.net/student?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(DB).then(()=>{
    console.log('connection successfully');
}).catch((err)=>console.log('no connection'));

app.use(cors())
app.use(express.json());
app.use(require('./router/auth'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})