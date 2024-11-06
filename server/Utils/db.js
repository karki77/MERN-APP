import mongoose from "mongoose";

const dbCon = async() => {
    try{
       await mongoose.connect(process.env.MONGOURL)
        console.log('mongodb is connected');
        
    }catch (error){
        console.log(error);
        
    }
}

export default dbCon;