const http=require('http')
const express=require('express')
const app=express()
const connectDb=require('./config/db')
const authRoutes=require('./routes/authRoutes')
const movierotes=require('./routes/movieRoutes')
require('dotenv').config()


app.use(express.json())

connectDb()

app.use('/auth',authRoutes)
app.use('/movie',movierotes)


 
app.listen(process.env.PORT,()=>{
    console.log(`server connected at ${process.env.PORT}`)
})