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
import styled from 'styled-components';
const base_url = 'https://image.tmdb.org/t/p/original/'

const Column = ({ title, fetchUrl, isLargeRow }) => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [movies, setMovies] = useState([])
  const [view, setView] = useState('')
    const [crew, setCrew] = useState([])


  const CustomDialog = styled(Dialog)`
  & .MuiPaper-root {
    background-color: #141414;
    border-radius: 8px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    margin: 0;
    padding: 24px;
    max-height: 90vh;
  }
`;

  const CustomDialogTitle = styled(DialogTitle)`
  && {
    font-size: 24px;
    color: white;
  }
`;

  const CustomDialogContent = styled(DialogContent)`
  && {
    background-color: #141414;
    color: white;
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    padding: 0;
  }
`;

  const CustomDialogContentText = styled(DialogContentText)`
  && {
    margin: 0;
    padding-left: 16px;
  }
`;

  const CustomDialogActions = styled(DialogActions)`
  && {
    background-color: #141414;
  }
`;

  const CustomButton = styled(Button)`
  && {
    color: white;
    font-size: 16px;
  }
`;

  const CustomWatchTrailerButton = styled(Button)`
  && {
    color: white;
    font-size: 16px;
    background-color: #e50914;
    border-radius: 4px;
  }
`;

  const CustomImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;




  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      console.log(request?.data?.results)

      setMovies(request?.data?.results)
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
      
      <div className='margin-top'>
      <h2>{title}</h2>
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
  <CustomDialog
          fullScreen
          open={open}
          onClose={handleClose}
          aria-labelledby='responsive-dialog-title'
        >
          <CustomDialogTitle id='responsive-dialog-title'>
            {view.name || view.title}
          </CustomDialogTitle>
          <CustomDialogContent>


            <CustomImg src={`${base_url}${view.poster_path}`} alt={view.name} />
            <CustomDialogContentText>
              {view.overview && (
                <p style={{ fontSize: '16px' }}>
                  <strong>Overview:</strong> {view.overview}
                </p>
              )}
              {view.air_date && (
                <p style={{ fontSize: '16px' }}>
                  <strong>Air Date:</strong> {view.air_date}
                </p>
              )}
              {view.vote_average && (
                <p style={{ fontSize: '16px' }}>
                  <strong>Vote Average:</strong> {view.vote_average}
                </p>
              )}

              {view.runtime && (
                <p style={{ fontSize: '16px' }}>
                  <strong>Duration:</strong> {view.runtime} mins
                </p>
              )}
              <p style={{ fontSize: '16px' }}>
                <strong>Cast</strong>
              </p>
              {crew.map((member) => (<span className="sect">{member.name}</span>))}


            </CustomDialogContentText>




          </CustomDialogContent>
          <CustomDialogActions>
            <CustomButton autoFocus onClick={handleClose}>
              Close
            </CustomButton>

            <a
              href={`/movie/${view.name || view.title}`}
              rel='noopener noreferrer'
            >
              <CustomWatchTrailerButton autoFocus onClick={handleClose}>
                Watch Trailer
              </CustomWatchTrailerButton>
            </a>

          </CustomDialogActions>
        </CustomDialog>

      </div>
    </div>
  )
}

export default Column
