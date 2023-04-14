import React, { useState, useEffect } from 'react'
import axios from '../utils/axios'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import '../assets/row.css'
const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [movies, setMovies] = useState([])
  const [view, setView] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      console.log(request.data.episodes)
      setMovies(request.data.episodes)
      return request
    }
    fetchData()
  }, [fetchUrl])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = (movie) => {
    console.log(movie)
    setView(movie)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const position = {
    position: 'absolute',
  }
  const shadow = {
    display: 'flex',
    flexDirection: 'row',
    background: `url(${base_url}${view.still_path})`,
    backgroundSize: 'contain',
    position: 'relative',
    height: '360px',
    backgroundPositionX: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
  }
  const button = {
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    fontWeight: '700',
    borderRadius: ' 0.2vw',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    marginRight: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    backgroundColor: 'rgba(230, 4, 4, 0.89)',
    '&:hover': {
      color: '#000',
      backgroundColor: '#e6e6e6',
      transition: 'all 0.2s',
    },
  }
  const container = {
    // position: 'absolute',
    // bottom: '0',
    // padding: '10px',
  }
  const content = {
    backgroundColor: 'black',
    color: '#fff',
    margin: '0',
    fontSize: '18px',
  }

  const text = {
    color: '#fff',
    margin: '0',
    fontSize: '18px',
  }

  const ptitle = {
    color: '#e5e5e5',
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '0',
    backgroundColor: 'black',
  }

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${base_url}${movie.still_path}`}
            alt={movie.name}
          />
        ))}
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby='responsive-dialog-title'
          style={{ ...shadow }}
        >
          <DialogTitle style={{ ...ptitle }} id='responsive-dialog-title'>
            {view.name}
          </DialogTitle>
          <DialogContent style={{ ...content }}>
            <DialogContentText style={{ ...text }} className={'text'}>
              {view.overview}
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{ ...content }}>
            <Button onClick={handleClose} style={{ ...button }} autoFocus>
              Play
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export default Row
