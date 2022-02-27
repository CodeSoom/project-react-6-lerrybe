/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import SearchFilmContainer from './SearchFilmContainer';

test('SearchFilmContainer를 렌더링한다.', () => {
  const { container } = render(<SearchFilmContainer />);

  expect(container).toHaveTextContent('영화');
});
