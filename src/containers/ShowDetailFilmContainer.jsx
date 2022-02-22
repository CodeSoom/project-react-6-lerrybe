import { useDispatch } from 'react-redux';
import { loadDetailMovieInfo } from '../_actions/actions';
import { loadItem } from '../_services/storage';

export default function ShowDetailFilmContainer() {
  const dispatch = useDispatch();
  const movie = loadItem('movie');

  dispatch(loadDetailMovieInfo(movie));

  return (
    <>
      <div>영화제목</div>
      <div>{movie}</div>
    </>
  );
}
