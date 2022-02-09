import styled from '@emotion/styled';
import SmallButton from '../styles/SmallButton';
import character from '../img/character.svg';

const CharacterWrapDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 320px;
  margin: 50px 0;
`;

const CharacterDiv = styled.div`
  width: 210px;
  height: 210px;
`;

const CharacterImg = styled.img`
  width: 210px;
  height: 210px;
`;

const CharacterUserWrapDiv = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  margin-bottom: 80px;
  padding-top: 70px;
`;

const UserInput = styled.input`
  display: flex;
  align-items: center;
  width: 255px;
  height: 60px;
  background: rgba(255, 255, 255, 0.21);
  border: 5px solid #FFFFFF;
  color: #FFFFFF;
  box-sizing: border-box;
  padding: 4px 0 4px 14px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 20px;
  font-family: 'DungGeunMo';
  &::placeholder {
    color: #FFFFFF;
    font-size: 20px;
    font-family: 'DungGeunMo';
  }
`;

export default function MainCharacter() {
  return (
    <CharacterWrapDiv>
      <CharacterDiv>
        <CharacterImg src={character} alt="character" />
      </CharacterDiv>
      <CharacterUserWrapDiv>
        <UserInput
          type="text"
          placeholder="이름을 입력해주세요."
        />
        <SmallButton type="button">입력</SmallButton>
      </CharacterUserWrapDiv>
    </CharacterWrapDiv>
  );
}
