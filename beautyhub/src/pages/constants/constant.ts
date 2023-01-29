

export type intstateType = {
    isLoading: boolean;
    isError: boolean;
    homePageData:HomePagearrType[]|[]
}

export type HomePagearrType = {
   id:{
    kind:string;
    vidioId:string;
   },
   snippet:{
    description:string;
    thumbnails:{
        high:number;
        url:string;
        width:number;
    },
    title:string;

   }
}
export default HomePagearrType


export type reducerAction={
    type:string;
    payload:any;
}
