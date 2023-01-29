import connect from "../../lib/mongodb"
import {UserModel} from "../../model/Schema"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req:NextApiRequest,res:NextApiResponse){

       const {email,password} = req.body
       await connect()
       const user =await UserModel.findOne({email})

       if(!user){
            return res.json({status:"Not able to find the user"})
       }else{
        res.redirect("/Home")
       }
  
}
