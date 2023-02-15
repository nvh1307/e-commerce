import Link from "next/link";
import Image from "next/legacy/image";

export interface Props {
    movie: TheMoviesProps
}

export interface TheMoviesProps {
    title: string;
    id:string;
    poster_path:string;
    release_date:string;
    vote_average:string
    vote_count:string,
}

export default function TheMovies({ movie }: Props) {
    const imagePath = "https://image.tmdb.org/t/p/original";
    const {id, poster_path,release_date,title,vote_average,vote_count} = movie

    return ( 
        <div>
            <div className="bg-slate-300 rounded-md">
                <div className="">
                    <Link href={`/${movie?.id}`}>
                        <div className="w-full h-12 text-center justify-center flex items-center">
                            {movie?.title}
                        </div>
                        <Image
                            layout="responsive"
                            width={500}
                            height={600}
                            src={imagePath+movie?.poster_path}
                            alt={movie?.title}
                        />
                    </Link>
                </div>
                <div className="mt-2 w-full flex justify-around py-1 px-[10px]">
                    <div className=" text-zinc-500 text-sm">
                        Release: {movie?.release_date}
                    </div>
                    <div className="flex">
                        <div className="pr-1 text-zinc-500 text-sm">Score:</div>
                        <div className="flex items-center w-fit font-medium px-[2px] bg-gradient-to-r rounded-[4px] text-[12px] from-yellow-400 to-yellow-600">
                            {movie?.vote_average}
                        </div>
                    </div>
                </div>
                <div className="mt-2 flex justify-around text-[14px]">
                    <div className="p-3 bg-zinc-300 rounded-sm">
                        <Link href={'/'}>
                            <button>View Trailer</button>
                        </Link>

                    </div>
                    <div className="p-3 bg-zinc-300 rounded-sm">
                        <Link href={'/'}>
                            <button>Book Tickets</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}