import Link from 'next/link';
import Image from 'next/image'

export default async function MovieDetail({params}) {
    console.log("params",params);
    const {movie} = params;
    console.log("movie_id",movie)
    
    const imagePath = "https://image.tmdb.org/t/p/original";
    const movie_detail = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=4dd202d895b0152921e982ed4e8a06e1&language=en-US`);
    const res_detail = await movie_detail.json();
    console.log("res_detail",res_detail);

    return(
        <>
            <div className='flex text-red-500 w-full text-xl'>
                <Link href={'/'}>
                    <div>Home</div>
                </Link>
                <span className='mx-2'>|</span>
                <div>{res_detail?.title}</div>
            </div>
            <div className="flex justify-center w-8/12">
                <div className="w-2/5">
                    <Image
                        layout="responsive"
                        width={500}
                        height={600}
                        src={imagePath+ res_detail?.poster_path}
                        alt={res_detail?.title}
                    />
                </div>
                <div className="w-3/5">
                    <div>{res_detail?.original_title}</div>
                    <div>{res_detail?.overview}</div>
                    <div>Production Countries:</div>
                </div>
            </div>
        </>
    )
}