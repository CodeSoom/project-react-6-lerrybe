import styled from '@emotion/styled';

// images
import github from '../img/github.svg';
import react from '../img/react.svg';
import velog from '../img/velog.svg';

const SubIconWrapDiv = styled.div`
  width: 100%;
  display: flex;
  padding-right: 24px;
  justify-content: flex-end;
  box-sizing: border-box;
  position: absolute;
  bottom: 30px;
`;

const SubIconImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 12px;
`;

export default function MainSubIcon() {
  return (
    <SubIconWrapDiv>
      <a href="https://github.com/CodeSoom/project-react-6-lerrybe">
        <SubIconImg src={github} alt="github" />
      </a>
      <a href="https://www.codesoom.com/">
        <SubIconImg src={react} alt="react" />
      </a>
      <a href="https://velog.io/@lerrybe">
        <SubIconImg src={velog} alt="velog" />
      </a>
    </SubIconWrapDiv>
  );
}
