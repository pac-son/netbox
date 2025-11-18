export const TMDB_CONFIG = {
  BASE_URL : 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_API_KEY,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`
  }
}

export  const fetchMovies = async ({ query }: { query : string }) => {
  const endpoint = '/discover/movie?sort_by=popularity.desc'

  const response  = await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.headers
  });

  if (!response.status) {
    // @ts-ignore
    throw new Error('Failed to fetch movies', response.statusText)
  }

  const data = await response.json()

  return data.results;
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODJjZGMzZDg4NmI4ZTBkZTg2MDIzN2I2Y2ZjZjFjYyIsIm5iZiI6MTc1Nzc3MDk2Ni4yNTMsInN1YiI6IjY4YzU3NGQ2NjI3MTQ5NGU4ZjA4OGM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KVHtQAAsxQxc_Wj4EdRPmI9wCi-U2IEowmCwPGThxJs'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));