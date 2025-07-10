
const mongoose=require('mongoose')


const connectDb= async ()=>{
    try{
 const conn=  await mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('database connected')
    })
    }catch(error){
        console.log(error)
    }
   
}
module.exports=connectDb