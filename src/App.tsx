import { Outlet } from "react-router-dom";
import BottomNav from "./components/BottomNav/BottomNav";
import Header from "./components/Header/Header";
import Container from "./components/Container/ScreenContainer";
import ContentContainer from "./components/Container/ContentContainer";

export default function App() {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <BottomNav />
    </Container>
  );
}
