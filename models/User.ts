import mongoose from "mongoose";

interface User {
    name:string
    email:string
    password:string 
}

const userSchema = new mongoose.Schema<User>({

        name:{ type: String, required:true},
        email :{type: String, required:true, unique: true},
        password: {type:String, required:true }
    
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User