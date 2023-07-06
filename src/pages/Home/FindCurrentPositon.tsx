import styled from 'styled-components';

const Container = styled.button`
  position: absolute;
  top: 50px;
  left: 50%;

  width: 140px;
  height: 44px;

  text-align: center;

  background-color: #00a881;
  border: none;
  border-radius: 22px;

  z-index: 400;
  color: #f0f0f5;
  font-size: 14px;

  transform: translateX(-50%);

  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  onClick?: () => void;
}

const FindCurrentPositon = ({ onClick }: Props) => {
  return <Container onClick={onClick}>현 위치에서 검색</Container>;
};

export default FindCurrentPositon;
