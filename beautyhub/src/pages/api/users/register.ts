import connect from "../../../../lib/mongodb"
import {UserModel} from "../../../../model/Schema"
connect()

 const register = async (req,res) => {
    try{
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