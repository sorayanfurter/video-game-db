import { ɵHttpInterceptingHandler } from "@angular/common/http";

export interface Game {
  id: string;
  game_pk:string;
  background_image?: string ;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailer>;


}

export interface APIResponse<T> {
    results: Array<T>;
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    slug: string;
  };
}

interface Publishers {
  name: string;
}

 interface Rating {
  id: number;
  count: number;
  title: string;
}

  interface Screenshots {



     image: string;
     hidden: boolean;

    }






interface Trailer {
  data: {
    max: string;
  };
}
