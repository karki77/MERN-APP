import UserModels from '../model/User.js';

const Createuser = async(req, res) => {
    try{
     const{name, fathername, email, phone} = req.body
  
     const NewUser = new UserModels({
      name, fathername, email, phone
     })
      await NewUser.save()
      res.status(200).json({success:true, Message: 'User created successfully', NewUser})
    }catch(error){ 
      console.log(error)
      res.status(500).json({success:false, Message: 'Internal server error', NewUser})
      
    }
   }
  
   // read api
  
   const GetUser = async(req, res) => {
      try{
         const user = await UserModels.find()
          if(!user){
              return res.status(400).json({success:false, Message:'User not found'})
          }
        res.status(200).json({sucess: true, user})
      }catch(error){
       console.log(error);
        return res.status(500).json({success:false, Message:'internal server errror'})
       
      }
   }
  
   //update api
  
   const UpdateUser = async(req,res) => {
     try{
      const UserId = req.params.id;
       const updateUser = await UserModels.findByIdAndUpdate(UserId, req.body, {new:true})
          if(!updateUser){
              return res.status(400).json({success:false, Message:'User not found'})
          }
       res.status(200).json({success: true, Message:'user updated successfully', updateUser})
     }catch(error){
    console.log(error)
    return res.status(500).json({success: false, Message: 'internal server error'})
    
     }
   }
  
   //delete api
  
   const DeleteUser = async (req,res) => {
      try{
        const UserId = req.params.id;
        const deletedUser = await UserModels.findByIdAndDelete(UserId)
        if(!deletedUser){
          return res.status(400).json({success: false, Message:'User not found'})
        }
        res.status(200).json({success:true, Message: 'User deleted successfully'})
      }catch(error){
       console.log(error);
       return res.status(500).json({success:false, Message:'internal server error'})
      }
   }
  
   export {Createuser, GetUser,UpdateUser, DeleteUser}