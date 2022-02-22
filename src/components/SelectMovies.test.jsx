/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import SelectMovies from './SelectMovies';

describe('SelectMovies', () => {
  it('TOP 10 보기 버튼이 렌더링된다.', () => {
    const { container } = render((
      <SelectMovies />
    ));

    expect(container).toHaveTextContent('TOP 10 보기');
  });
});
