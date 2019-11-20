import React from 'react'

const MovieInfo = props => {
  return (
    <>
      <main>
        <div className="poster">
          <img
            src={
              'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + props.poster
            }
            alt="movie poster"
          />
        </div>
        <li>{props.title}</li>
        <li>{props.overview}</li>
      </main>
    </>
  )
}

export default MovieInfo
