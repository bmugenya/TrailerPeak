const API_KEY = '64422b19ff6d242b3851b117c783ec08'

const requests = {
  upcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  popular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  latest: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  trend: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
airing: `/tv/airing_today?api_key=${API_KEY}&language=en-US`,

}

export default requests
