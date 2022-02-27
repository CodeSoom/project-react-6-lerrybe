/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import PlayDevice from './PlayDevice';

describe('PlayDevice', () => {
  it('영화 재생기가 렌더링된다.', () => {
    const { container } = render((
      <PlayDevice />
    ));

    expect(container).toHaveTextContent('Playing OST');
    expect(container).toHaveTextContent('좋아요');
  });
});
