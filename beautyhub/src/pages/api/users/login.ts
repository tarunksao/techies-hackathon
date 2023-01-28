import connect from "../../lib/mongodb"
import {UserModel} from "../../model/Schema"
connect()

export default async function handler(req,res){

       const {email,password} = req.body
       const user =await UserModel.findOne({email})

       if(!user){
            return res.json({status:"Not able to find the user"})
       }else{
        res.redirect("/Home")
       }
  
}