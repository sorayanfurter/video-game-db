import { ɵHttpInterceptingHandler } from "@angular/common/http";

export interface Game {
  id: string;
  background_image: string ;
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
  game_pk:string;
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

 export interface Screenshots {


  count: number;
  next: string;
  previous: string;
  results: {
    image: string;
    hidden: boolean;
  }


}

interface Trailer {
  data: {
    max: string;
  };
}
