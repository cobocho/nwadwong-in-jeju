import styled from "styled-components";
import MapHeader from "./MapHeader";
import { useLocation } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

export default function Header() {
  const { pathname } = useLocation();

  if (
    [
      "/login",
      "/mypage",
      "/donation",
      "/donation-input",
      "/uploadImage",
    ].includes(pathname)
  ) {
    return (
      <HeaderContainer>
        <SmallHeader>
          <BackIcon />
          <Title>반납 인증</Title>
        </SmallHeader>
      </HeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <MapHeader />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

const SmallHeader = styled.div`
  height: 113px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const BackIcon = styled(FaChevronLeft)`
  width: 15px;
  height: 15px;
  top: 70px;
  left: 12px;
  position: absolute;
`;

const Title = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  margin-top: 64px;
`;
