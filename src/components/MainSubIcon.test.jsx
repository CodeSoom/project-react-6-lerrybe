/**
 * @jest-environment jsdom
 */
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import MainSubIcon from './MainSubIcon';

it('서브 아이콘들을 렌더링한다.', () => {
  const { queryByAltText } = render((
    <MemoryRouter>
      <MainSubIcon />
    </MemoryRouter>
  ));

  expect(queryByAltText('github')).toBeInTheDocument();
  expect(queryByAltText('react')).toBeInTheDocument();
  expect(queryByAltText('velog')).toBeInTheDocument();
});
