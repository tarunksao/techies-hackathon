import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
    videoId:{type:String, required:true},
    title:{type:String, required:true},
    desc:{type:String, required:true},
    image_src:{type:String, required:true},
    imgWidth:Number,
    imgHeight:Number
}, {
    versionKey:false
});

const ProductModel = models.product || model('product', productSchema);

export default ProductModel;

export interface Product {
    videoId:string;
    title:string;
    desc:string;
    image_src:string;
    imgWidth:number;
    imgHeight:number;
    _id:string
}
