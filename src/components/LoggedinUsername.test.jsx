/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import LoggedinUsername from './LoggedinUsername';

describe('LoggedinUsername', () => {
  it('"입력한 username님 안녕하세요!"를 확인한다.', () => {
    const username = 'lerry';

    const { container } = render((
      <LoggedinUsername
        inputUsername={username}
      />
    ));

    expect(container).toHaveTextContent('lerry님, 안녕하세요!');
  });
});
