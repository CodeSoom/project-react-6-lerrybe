/**
 * @jest-environment jsdom
 */
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import MainPage from './MainPage';

test('MainPage', () => {
  render((
    <MemoryRouter>
      <MainPage />
    </MemoryRouter>
  ));
});
