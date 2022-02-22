const KOFIC_API_KEY = process.env.REACT_APP_KOFIC_API_KEY;

export default async function fetchDailyBoxOfficeList({ date, nation }) {
  const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json'
    + `?key=${KOFIC_API_KEY}&targetDt=${date}&multiMovieYn=N&repNationCd=${nation}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
