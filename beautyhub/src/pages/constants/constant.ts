import { Product } from "model/product.model";

export type intstateType = {
  isLoading: boolean;
  isError: boolean;
  homePageData: Product[] | [];
};

export type HomePagearrType = {
  //    id:{
  //     kind:string;
  //     vidioId:string;
  //    },
  //    snippet:{
  //     description:string;
  //     thumbnails:{
  //         high:number;
  //         url:string;
  //         widht:number;
  //     },
  //     title:string;
  //    }
  etag: string;
  id: {
    kind: string;
    vidioId: string;
  };
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;

    thumbnails: {
      default: {
        height: number;
        url: string;
        width: number;
      };
      high: {
        height: number;
        url: string;
        width: number;
      };
      medium: {
        height: number;
        url: string;
        width: number;
      };
    };
    title: string;
  };
};
export default HomePagearrType;
export type reducerAction = {
  type: string;
  payload: any;
};
