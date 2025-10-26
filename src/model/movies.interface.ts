export interface Movie{
  id:number,
  title:string,
  overview:string,
  poster_path:string,
  vote_average:number,
  backdrop_path:string
  release_date:number
}

export interface Movieresponse{
  page:number;
  results:Movie[];
  total_pages:number;
  total_results:number;

}
