const express=require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const User = require('./model.js')
const url = 'mongodb://127.0.0.1:27017'

//mongodb connections
mongoose.connect(url,{useNewUrlParser:true})    
const con = mongoose.connection

//use imports
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/login',async (req,res)=>{
    const user = await User.find()
    res.json(user)
})


app.get('/home',async (req,res)=>{
    const Loga = await User.find()
    try{
        res.json(Loga);
    }catch(e){
        console.log(e);
    }
    
})


app.post('/login',async (req,res)=>{
    const{email, password} = req.body

    try{
        const check = await User.findOne({email:email})
        if(check){
            res.json("exist")    
        }else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }

})

app.delete('/:id',async(req,res)=>{
    try{
        const del = await User.findByIdAndDelete(req.params.id)
        const deldata = await del.remove()
        res.json(deldata)
    }catch(e){
        res.send(e)
    }
})

app.get('/:id',async (req,res)=>{
    const getuser = await User.findById(req.params.id)
    res.json(getuser)
})

app.post('/signup',async (req,res)=>{
    const{email, password} = req.body

    const data = {
        email:email,
        password:password
    }

    try{
        const check = await User.findOne({email:email})
        if(check){
            res.json("exist")    
        }else{
            res.json("notexist")
            await User.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }

})



app.listen(3000,()=>{
    console.log('Server started')
})

con.on('open',()=>{
    console.log('Established connection to the mongodb')
})


