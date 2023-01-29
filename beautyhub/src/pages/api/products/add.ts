import connect from "lib/mongodb";
import ProductModel, { Product } from "model/product.model";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req:NextApiRequest,res:NextApiResponse) => {
    const payload:Product = req.body;
    
    try{
        await connect();
        const newVideo = new ProductModel(payload);
        await newVideo.save();
        res.send(newVideo);
    } catch (err) {
        res.send({error:err});
    }
}

export default handler;
