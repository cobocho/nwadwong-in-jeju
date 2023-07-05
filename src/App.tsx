import { Outlet } from 'react-router-dom';
import BottomNav from './components/BottomNav/BottomNav';
import Header from './components/Header/Header';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNav />
    </>
  );
}
