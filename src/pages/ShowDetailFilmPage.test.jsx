/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import ShowDetailFilmPage from './ShowDetailFilmPage';

describe('ShowDetailFilmPage', () => {
  it('ShowDetailFilmPage가 렌더링된다.', () => {
    render((
      <ShowDetailFilmPage />
    ));
  });
});
