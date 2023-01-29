import connect from "lib/mongodb"
import UserModel from "model/Schema";
import { NextApiRequest, NextApiResponse } from "next"

 const register = async (req:NextApiRequest,res:NextApiResponse) => {
    try{
     await connect()
        const user =  new UserModel(req.body)
        await user.save()
        if(!user){
            return res.json({"code":"USER NOT CREATED"})
        }
    }catch(err){
            res.json({
                ERROR:err
            })
    }
}

export default register
