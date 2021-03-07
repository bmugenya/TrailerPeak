const API_KEY = '64422b19ff6d242b3851b117c783ec08'

const requests = {
  fetchSeasonOne: `/tv/46260/season/1?api_key=${API_KEY}&language=en-US`,
  fetchSeasonTwo: `/tv/46260/season/2?api_key=${API_KEY}&language=en-US`,
  fetchSeasonThree: `/tv/46260/season/3?api_key=${API_KEY}&language=en-US`,
  fetchSeasonFour: `/tv/46260/season/4?api_key=${API_KEY}&language=en-US`,
  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  // fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests
