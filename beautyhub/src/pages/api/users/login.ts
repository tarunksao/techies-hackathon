import connect from "lib/mongodb"
import UserModel from "model/Schema"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const {email,password} = req.body
    try{
        await connect()
        const user =await UserModel.findOne({email})

        if(!user){
            return res.json({"code":"Cannot login"})
        }else{
            return res.send(user)
        }
    } catch(err){
            res.send("Not able to login")
    }
}
