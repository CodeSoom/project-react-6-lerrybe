/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import UserInputFormContainer from './UserInputFormContainer';

jest.mock('react-redux');

describe('UserInputFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      inputUsername: '',
    }));
  });

  context('로그인 할 때', () => {
    it('이름을 변경하고 입력버튼을 누르면 액션이 생성된다.', () => {
      const { getByPlaceholderText, getByText } = render((
        <UserInputFormContainer />
      ));

      const input = getByPlaceholderText('이름을 입력해주세요.');

      fireEvent.change(input, {
        target: { value: 'lerry' },
      });

      fireEvent.click(getByText('입력'));

      expect(dispatch).toBeCalled();
    });
  });
});
