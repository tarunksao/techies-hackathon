import connect from "lib/mongodb";
import ProductModel, { Product } from "model/product.model";
import { NextApiRequest, NextApiResponse } from "next"; 

const handler = async (req:NextApiRequest,res:NextApiResponse) => {
    const {method} = req;
    try{
        await connect();
        if (method==='GET'){
            const allVideo = await ProductModel.find();
            res.send(allVideo);
        } else {
            res.status(400).send({message:'Wrong API Request Method'})
        }
    } catch (err) {
        res.send({error:err});
    }
}

export default handler;
