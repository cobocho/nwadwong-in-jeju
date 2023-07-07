import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import userState from "../../recoil/userState";

const MyPage = () => {
  const user = useRecoilValue(userState);

  return (
    <Container>
      {/* {user && (
        <div className="user">
          <div className="userProfileContainer">
            <img src="/images/profile.png" className="profile" />
            <p className="userName">
              {user.nickname}님은 지금까지
              <br />
              {user.accumulatePoint} point 를 기부했어요.
            </p>
          </div>
          <GainedPoint>
            <AlertBox>
              <CupImage src="/images/uploadImage/cup.svg" />
              <div className="textContainer">
                <SecondText>잔여 포인트: </SecondText>
                <SecondText>{user.point}</SecondText>
              </div>
            </AlertBox>
            <EllipseImg src="/images/uploadImage/successAlert.png" />
          </GainedPoint>
        </div>
      )} */}
      {user && (
        <div className="user">
          <GainedPoint>
            <AlertBox>
              <div className="userProfileContainer">
                <img src="/images/profile.png" className="profile" />
                <p className="userName">
                  {user.nickname}님이
                  <br />
                  기부한 포인트: {user.accumulatePoint}
                </p>
              </div>
              <div className="textContainer">
                <SecondText>잔여: {user.point} points</SecondText>
              </div>
            </AlertBox>
            <EllipseImg src="/images/uploadImage/successAlert.png" />
          </GainedPoint>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  /* padding-top: 40px; */

  .userProfileContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    .userName {
      font-size: 24px;
      font-weight: 700;
    }
  }

  .user {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 8px;

    .profile {
      width: 100px;
    }

    .user-name {
      strong {
        font-size: 28px;
        font-weight: 600;
      }
    }
  }

  .point {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;

    .user-point {
      position: absolute;
      left: 50%;
      bottom: 20%;
      font-size: 12px;
      color: #888888;
      transform: translateX(-50%);
    }
    .user-acc {
      position: absolute;
      left: 50%;
      bottom: 30%;
      font-size: 20px;
      transform: translateX(-50%);
      font-weight: 600;
    }
    .cup {
      position: absolute;
      left: 50%;
      bottom: 40%;
      font-size: 20px;
      transform: translateX(-50%);
    }
  }
`;

const GainedPoint = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlertBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .textContainer {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CupImage = styled.img``;

const Text = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

const SecondText = styled.span`
  font-size: 15px;
`;

const EllipseImg = styled.img``;

export default MyPage;
