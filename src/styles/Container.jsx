import styled from '@emotion/styled';
import '../../public/img/space.svg';
import '../../public/img/cursor.svg';
import '../../public/img/cursor-input.svg';
import '../../public/img/cursor-select.svg';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background: url('../../public/img/space.svg');
  background-size: 100vw auto;
  color: white;
  font-family: 'DungGeunMo';
  cursor: url('../../public/img/cursor.svg'), auto;
  & div {
    cursor: url('../../public/img/cursor.svg'), auto;
  }
  & button, a, Link {
    cursor: url('../../public/img/cursor-select.svg'), auto;
  }
  & input {
    cursor: url('../../public/img/cursor-input.svg'), auto;
  }
  @keyframes fadein {
    from { 
      opacity: 0; 
    }
    to { 
      opacity: 1; 
    }
  }
  animation: fadein 2s;
`;

export default Container;
