

export type intstateType = {
    isLoading: boolean;
    isError: boolean;
    homePageData:HomePagearrType[]|[]
}

type HomePagearrType = {
   id:{
    kind:string;
    vidioId:string;
   },
   snippet:{
    description:string;
    thumbnails:{

        high:number;
        url:string;
        widht:number;
    },
    title:string;

   }
}
export default HomePagearrType


export type reducerAction={
    type:string;
    payload:any;
}