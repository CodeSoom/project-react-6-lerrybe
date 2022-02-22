const KOFIC_API_KEY = process.env.REACT_APP_KOFIC_API_KEY;
const NAVER_MOVIE_CLIENT_ID = process.env.REACT_APP_NAVER_MOVIE_CLIENT_ID;
const NAVER_MOVIE_CLIENT_SECRET = process.env.REACT_APP_NAVER_MOVIE_CLIENT_SECRET;

export async function fetchDailyBoxOfficeList({ date, nation }) {
  const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json'
    + `?key=${KOFIC_API_KEY}&targetDt=${date}&multiMovieYn=N&repNationCd=${nation}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchDetailMovieInfo(movie) {
  const url = '/v1/search/movie.json';
  const response = await fetch(url, {
    method: 'GET',
    params: {
      query: movie,
      display: 10,
    },
    headers: {
      'X-Naver-Client-Id': NAVER_MOVIE_CLIENT_ID,
      'X-Naver-Client-Secret': NAVER_MOVIE_CLIENT_SECRET,
    },
  });
  const data = await response.json();
  return data;
}
