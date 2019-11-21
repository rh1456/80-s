import React, { useState, useEffect } from 'react'
import MovieInfo from './Movie'
import axios from 'axios'

const GetAPIData = () => {
  const [movies, setMovies] = useState([])
  const movieData = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=9c1bbfefb575f9cb6c182e019bc74b99'
    )
    setMovies(resp.data.results)
  }
  useEffect(() => {
    movieData()
  }, [])

  return (
    <>
      <body>
        <header>
          <h1>Best Movies From 1989</h1>
        </header>
        <main>
          <section className="movieLayout">
            {movies.map(movie => {
              return (
                <MovieInfo
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  overview={movie.overview}
                  date={movie.release_date}
                />
              )
            })}
          </section>
        </main>
      </body>
    </>
  )
}

export default GetAPIData
