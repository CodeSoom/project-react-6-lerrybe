/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import NavigationBar from './NavigationBar';

test('NavigationBar', () => {
  render((
    <NavigationBar />
  ));
});
