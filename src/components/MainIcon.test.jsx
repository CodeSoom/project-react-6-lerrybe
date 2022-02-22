/**
 * @jest-environment jsdom
 */
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import MainIcon from './MainIcon';

test('메뉴 바에 해당하는 아이콘들을 렌더링한다.', () => {
  const { queryByAltText } = render((
    <MemoryRouter>
      <MainIcon />
    </MemoryRouter>
  ));

  expect(queryByAltText('home')).toBeInTheDocument();
  expect(queryByAltText('boxoffice')).toBeInTheDocument();
  expect(queryByAltText('search')).toBeInTheDocument();
  expect(queryByAltText('myost')).toBeInTheDocument();
});
