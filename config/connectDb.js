const mongoose=require('mongoose')
const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongodb connected')
    }catch(error){
         console.log(error)
    }
}

module.exports=connectDb;