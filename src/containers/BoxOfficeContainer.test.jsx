/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import BoxOfficeContainer from './BoxOfficeContainer';

describe('BoxOfficeContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    dailyBoxOfficeList: [
      { rank: 1, movieNm: '스파이더맨' },
      { rank: 2, movieNm: '헐크' },
      { rank: 3, movieNm: '아이언맨' },
    ],
  }));

  it('Box Office 메뉴 타이틀을 렌더링한다.', () => {
    const { container } = render(
      <BoxOfficeContainer />,
    );

    expect(container).toHaveTextContent('Box Office');
  });

  it('날짜별 Top 10을 볼 수 있도록 날짜 선택, 영화 장르 선택 요소를 렌더링한다.', () => {
    const { container } = render(
      <BoxOfficeContainer />,
    );

    expect(container).toHaveTextContent('날짜');
    expect(container).toHaveTextContent('한국영화');
  });

  context('영화 목록이 렌더링 되었을 때', () => {
    it('박스 오피스 top 10 영화들을 렌더링한다.', () => {
      const { container } = render(
        <BoxOfficeContainer />,
      );

      expect(container).toHaveTextContent('스파이더맨');
      expect(container).toHaveTextContent('헐크');
      expect(container).toHaveTextContent('아이언맨');
    });
  });
});
