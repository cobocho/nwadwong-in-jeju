import styled from "styled-components";
import MapHeader from "./MapHeader";
import { useLocation } from "react-router-dom";
import SmallHeader from "./SmallHeader";

export default function Header() {
  const { pathname } = useLocation();

  if (
    ["/login", "/mypage", "/donation", "/donation-input"].includes(pathname)
  ) {
    return <></>;
  } else if (
    pathname.includes("/detail") ||
    pathname.includes("/uploadImage") ||
    pathname.includes("/submit")
  ) {
    return <SmallHeader />;
  } else {
    return (
      <HeaderContainer>
        <MapHeader />
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
`;
