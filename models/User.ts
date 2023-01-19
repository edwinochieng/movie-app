import mongoose from "mongoose";

interface User {
    name:string
    email:string
}

const userSchema = new mongoose.Schema<User>({

        name:{ type: String, required:true},
        email :{type: String, required:true, unique: true},
    
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User