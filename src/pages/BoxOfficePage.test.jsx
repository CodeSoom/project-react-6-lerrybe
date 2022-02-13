/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import BoxOfficePage from './BoxOfficePage';

describe('BoxOfficePage', () => {
  it('BoxOfficePage가 렌더링된다.', () => {
    render((
      <BoxOfficePage />
    ));
  });
});
