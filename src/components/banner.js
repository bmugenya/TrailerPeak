import React, { useState, useEffect } from 'react'
import axios from '../utils/axios'
import requests from '../utils/requests'
import '../assets/banner.css'

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.upcoming)
      console.log(request.data)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      )
      return request
    }
    fetchData()
  }, [])
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }
  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https:image.tmdb.org/t/p/original/${movie?.poster_path}")`,
        backgroundPostion: 'center center',
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>{movie?.title || movie?.original_name}</h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>

        <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner
