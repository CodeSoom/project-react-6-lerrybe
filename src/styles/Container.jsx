import styled from '@emotion/styled';
import '../../assets/img/space.svg';
import '../../assets/img/cursor.svg';
import '../../assets/img/cursor-input.svg';
import '../../assets/img/cursor-select.svg';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background: url('../../assets/img/space.svg');
  background-size: 100vw auto;
  color: white;
  font-family: 'DungGeunMo';
  cursor: url('../../assets/img/cursor.svg'), auto;
  & div {
    cursor: url('../../assets/img/cursor.svg'), auto;
  }
  & button, a, Link {
    cursor: url('../../assets/img/cursor-select.svg'), auto;
  }
  & input {
    cursor: url('../../assets/img/cursor-input.svg'), auto;
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
