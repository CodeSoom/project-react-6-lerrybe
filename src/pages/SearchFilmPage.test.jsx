/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import SearchFilmPage from './SearchFilmPage';

describe('SearchFilmPage', () => {
  it('SearchFilmPage가 렌더링된다.', () => {
    render((
      <SearchFilmPage />
    ));
  });
});
