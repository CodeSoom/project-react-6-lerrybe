/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import PlayDevice from './PlayDevice';

test('PlayDevice', () => {
  render((
    <PlayDevice />
  ));
});