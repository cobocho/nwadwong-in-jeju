import { ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import userState from '../../recoil/userState';
import { useNavigate } from 'react-router-dom';
import { checkValidToken } from '../../api/authApi';

export default function ContentContainer({ children }: { children: ReactNode }) {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      checkValidToken();
    }
  }, [token]);

  return <ContentBox>{children}</ContentBox>;
}

const ContentBox = styled.div`
  position: relative;
  min-width: 360px;
  max-width: 414px;
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  padding: 0 20px;
`;
