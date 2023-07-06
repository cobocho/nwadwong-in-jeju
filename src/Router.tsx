import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AuthCallback from './pages/Login/AuthCallback';
import UploadImage from './pages/UploadImage/UploadImage';
import StoreDetail from './pages/StoreDetail/StoreDetail';
import Return from './pages/Return/Return';
import MyPage from './pages/MyPage/MyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <></> },
      { path: '/home', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/return/:id', element: <Return /> },
      { path: '/login/auth', element: <AuthCallback /> },
      { path: '/detail', element: <StoreDetail /> },
      { path: '/uploadImage', element: <UploadImage /> },
      { path: '/mypage', element: <MyPage /> },
    ],
  },
]);

export default router;
