import connect from "../../lib/mongodb"
import {UserModel} from "../../model/Schema"
connect()

export default async function handler(req,res){

       const {email,password} = req.body
       const user =await UserModel.findOne({email})

           if(!user){
            return res.json({"code":"Cannot login"})
                }else{
                    res.send({user})
                }
        }catch(err){
            res.send("Not able to login")
        }
}
