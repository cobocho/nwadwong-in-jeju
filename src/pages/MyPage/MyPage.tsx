import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import userState from '../../recoil/userState';

const MyPage = () => {
  const user = useRecoilValue(userState);

  return (
    <Container>
      <h1>내 정보</h1>
      {user && (
        <div className="user">
          <img
            src="/images/profile.png"
            className="profile"
          />
          <p className="user-name">{user.nickname}</p>
          <p className="user-name">{user.point}</p>
          <p className="user-name">{user.accumulatePoint}</p>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding-top: 40px;

  h1 {
    font-size: 24px;
    font-weight: 600;
  }

  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #f0f0f5;
    border-radius: 8px;

    .profile {
      width: 100px;
    }
  }
`;

export default MyPage;
