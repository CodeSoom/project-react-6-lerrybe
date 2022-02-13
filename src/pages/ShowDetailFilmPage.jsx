import { useParams } from 'react-router-dom';

import ShowDetailFilmContainer from '../containers/ShowDetailFilmContainer';

export default function ShowDetailFilmPage({ params }) {
  const { movie } = params || useParams();

  return (
    <>
      <ShowDetailFilmContainer movie={movie} />
    </>
  );
}
