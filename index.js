const express = require('express');
const app = express();
const port = 2000;
const bodyParser = require('body-parser')
app.use(bodyParser())

app.get('/', (req,res)=>{
    res.status(200).send('<h1>Welcome to My API</h1>')
})
app.post('/post', (req,res)=>{
    console.log(req.body)
    //Axios.post(APIURL,data){}
    //req.body adalah parameter kedua dari Axios.post yaitu data
    //req.params
    //req.querry
    //req.body
    // res.status(200).send('<h1>Post</h1>')
    if(req.body.username === 'lian'){
        res.status(500).send('<h1>lanjut</h1>')
    }else{
        res.status(500).send('<h1>Gaboleh</h1>')
    }
})
app.patch('/patch/:bebas/:haha/:hihi', (req,res)=>{
    console.log(req.params.bebas)
    res.status(200).send('<h1>patch</h1>')
})
app.put('/put', (req,res)=>{
    console.log(req.query)
    res.status(200).send('<h1>Put</h1>')
})
app.delete('/', (req,res)=>{
    res.status(200).send('<h1>delete</h1>')
})

const {userRouter} = require('./router')
app.use('/users', userRouter)

app.listen(port, ()=> console.log(`API active at port ${port}`))