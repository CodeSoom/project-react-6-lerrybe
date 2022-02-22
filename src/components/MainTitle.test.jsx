/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import MainTitle from './MainTitle';

test('title과 subtitle을 렌더링한다.', () => {
  const { container } = render(<MainTitle />);

  expect(container).toHaveTextContent('MIFILM');
  expect(container).toHaveTextContent('영화 속 OST');
});
