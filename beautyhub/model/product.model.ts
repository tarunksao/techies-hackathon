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
}

// [
//     {
//         "kind": "youtube#searchResult",
//         "etag": "KEDbLWpBUoh4gwqA-RJOEtNbAyw",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "wuXqKL6Fh0M"
//         },
//         "snippet": {
//             "publishedAt": "2023-01-13T17:00:11Z",
//             "channelId": "UCRXiA3h1no_PFkb1JCP0yMA",
//             "title": "Julianne Moore’s Guide to Flattering Makeup for Redheads | Beauty Secrets | Vogue",
//             "description": "Actor Julianne Moore walks us through her everyday skin care routine and reveals the secrets behind her day-to-night makeup ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/wuXqKL6Fh0M/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/wuXqKL6Fh0M/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/wuXqKL6Fh0M/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Vogue",
//             "liveBroadcastContent": "none",
//             "publishTime": "2023-01-13T17:00:11Z"
//         }
//     }
// ]
