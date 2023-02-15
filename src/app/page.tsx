"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import TheMovies, { TheMoviesProps } from './the-movies/page'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [data,setData] = useState<TheMoviesProps[]>([]);

  useEffect(()=> {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4dd202d895b0152921e982ed4e8a06e1&language=en-US&page=1`);
    const res = await data.json();
    setData(res?.results);
  }
  console.log("data",data);
  
  return (
    <div className=''>
      
      <div className='grid gap-5 grid-cols-fluid'>
        {data?.map((movie) => (
          <TheMovies movie={movie} key={movie?.id}/>
        ))}
      </div>
    </div>
  )
}
