/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ShowDetailFilmContainer from './ShowDetailFilmContainer';

jest.mock('react-redux');

describe('ShowDetailFilmContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      movieInfo: {
        title: '스파이더맨: 노 웨이 홈',
        actor: '톰 홀랜드',
        pubDate: 2021,
      },
    }));
  });

  it('로딩 컴포넌트가 렌더링 된다.', () => {
    const { container } = render((
      <ShowDetailFilmContainer />
    ));

    expect(container).toHaveTextContent('Loading');

    expect(dispatch).toBeCalled();
  });
});
