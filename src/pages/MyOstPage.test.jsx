/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import MyOstPage from './MyOstPage';

describe('MyOstPage', () => {
  it('MyOstPage가 렌더링된다.', () => {
    render((
      <MyOstPage />
    ));
  });
});
