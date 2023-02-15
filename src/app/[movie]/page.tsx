export default async function MovieDetail({params}) {
    console.log("params",params);
    const {movie_id} = params;
    console.log("movie_id",movie_id)
    
    const imagePath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}&language=en-US`);
    const res = await data.json();
    console.log("res",res);


    return(
        <div>
            <h2>Movie Detail</h2>
        </div>
    )
}