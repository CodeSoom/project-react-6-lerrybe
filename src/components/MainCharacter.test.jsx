/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import MainCharacter from './MainCharacter';

test('유저 아이콘과 입력 버튼을 렌더링한다.', () => {
  const {
    container,
    queryByAltText,
  } = render(<MainCharacter />);

  expect(queryByAltText('character')).toBeInTheDocument();
  expect(container).toHaveTextContent('입력');
});
