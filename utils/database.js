import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async()=>{
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log('Already Connected')
        return
    }
}

try {
    await mongoose.connect(process.env.MONGODB,{
        dbName:"share_prompt",
    })
    isConnected=true;
    console.log("connected")
} catch (error) {
    console.log(error)
}