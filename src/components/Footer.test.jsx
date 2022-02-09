/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import Footer from './Footer';

test('Footer를 렌더링한다.', () => {
  const { container } = render(<Footer />);

  expect(container).toHaveTextContent('lerrybe');
});
