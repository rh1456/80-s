import React from 'react'

const MovieInfo = props => {
  return (
    <>
      <h2>{props.title}</h2>
      <div className="posterAndSum">
        <img
          src={
            'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + props.poster
          }
          alt="movie poster"
        />

        <p className="summary">{props.overview}</p>
      </div>
      <p className="date">Release Date: {props.date}</p>
    </>
  )
}

export default MovieInfo
