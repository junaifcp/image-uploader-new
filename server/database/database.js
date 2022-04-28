const mongoose=require('mongoose')
const config=require('../../config')

const Connect=async()=>{
    try {
        const conn=await mongoose.connect(config.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
          
        })    
        console.log('Mongodb connected');
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
module.exports=Connect