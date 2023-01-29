import connect from "../../../../lib/mongodb"
import {UserModel} from "../../../../model/Schema"
connect()

 const register = async (req,res) => {
    try{
        const user =  new UserModel(req.body)
        await user.save()
        // res.send()
        if(!user){
            return res.json({"code":"USER NOT CREATED"})
        }else{
            res.send({user})
        }
    }catch(err){
            res.json({
                ERROR:err
            })
    }
}

export default register
