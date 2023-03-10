import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

export interface UserType {
    name:string;
    age:string;
    email:string;
    password:string;
}
                                                 
const UserModel = mongoose.models.user ||  mongoose.model("user",userSchema)

export default UserModel;
