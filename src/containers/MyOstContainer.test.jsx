/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import MyOstContainer from './MyOstContainer';

test('MyOstContainer를 렌더링한다.', () => {
  const { container } = render(<MyOstContainer />);

  expect(container).toHaveTextContent('내가 좋아하는');
});
