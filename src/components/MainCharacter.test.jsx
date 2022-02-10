/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import MainCharacter from './MainCharacter';

test('UserInputFormContainer를 렌더링한다.', () => {
  const {
    container,
    queryByAltText,
  } = render(<MainCharacter />);

  expect(queryByAltText('character')).toBeInTheDocument();
  expect(container).toHaveTextContent('입력');
});
