/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import PlayItem from './PlayItem';

test('PlayItem', () => {
  render((
    <PlayItem />
  ));
});
