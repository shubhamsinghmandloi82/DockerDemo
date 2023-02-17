const express = require('express');
const app = express();
const port = process.env.PORT || 6000;
const router = require('./src/routes/index')
 require('./src/config/db')
 require('./src/config/redis')

app.use(express.json())

app.use('/api/v1',router)
app.get('/test',(req,res)=>{
    res.json("test")
})

app.listen(port,()=>{
    console.log("Server Is Running On Port No ->", port)
})
