import styled from '@emotion/styled';
import '../img/space.svg';
import '../img/cursor.svg';
import '../img/cursor-input.svg';
import '../img/cursor-select.svg';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background: url('../img/space.svg');
  background-size: 100vw auto;
  color: white;
  font-family: 'DungGeunMo';
  cursor: url('../img/cursor.svg'), auto;
  & div {
    cursor: url('../img/cursor.svg'), auto;
  }
  & button, a, Link {
    cursor: url('../img/cursor-select.svg'), auto;
  }
  & input {
    cursor: url('../img/cursor-input.svg'), auto;
  }
`;

export default Container;
