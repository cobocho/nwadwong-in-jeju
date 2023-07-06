import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function SmallHeader() {
  const { pathname } = useLocation();

  const matchedTitle =
    TITLE_DATA.find((item) => pathname.includes(item.path))?.title || "";

  return (
    <Header>
      <BackIcon onClick={() => window.history.back()} />
      <Title>{matchedTitle}</Title>
    </Header>
  );
}

const Header = styled.div`
  height: 113px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 17px;
`;

const BackIcon = styled(FaChevronLeft)`
  width: 15px;
  height: 15px;
  top: 70px;
  left: 12px;
  position: absolute;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  margin-top: 64px;
`;

const TITLE_DATA = [
  {
    id: 1,
    path: "/uploadImage",
    title: "반납 인증",
  },
  { id: 2, path: "/detail", title: "위치 상세보기" },
  { id: 3, path: "/submit", title: "포인트 기부하기" },
];
