/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from '@testing-library/react';
import UserInputForm from './UserInputForm';

describe('UserInputForm', () => {
  const handleChangeUsername = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChangeUsername.mockClear();
    handleSubmit.mockClear();
  });

  function renderUserInputForm({ username }) {
    return render((
      <UserInputForm
        username={username}
        handleChangeUsername={handleChangeUsername}
        handleSubmit={handleSubmit}
      />
    ));
  }

  it('input 컨트롤을 렌더링하고 이벤트 변화를 감지한다.', () => {
    const username = 'lerry';

    const { getByPlaceholderText } = renderUserInputForm({ username });
    const controls = {
      name: 'name',
      origin: username,
      value: 'yeji',
    };
    const { origin, value } = controls;
    const input = getByPlaceholderText('이름을 입력해주세요.');

    expect(input.value).toBe(origin);

    fireEvent.change(input, {
      target: { value },
    });

    expect(handleChangeUsername).toBeCalled();
  });

  it('입력 버튼을 렌더링하고, 그 버튼을 클릭했을 때 동작한다.', () => {
    const { getByText } = renderUserInputForm({});

    fireEvent.click(getByText('입력'));

    expect(handleSubmit).toBeCalled();
  });
});
