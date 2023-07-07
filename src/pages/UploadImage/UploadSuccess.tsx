import styled from "styled-components";
import { userPointState } from "../../recoil/userPointState";
import { useRecoilValue } from "recoil";

export default function UploadSuccess() {
  const userPointData = useRecoilValue(userPointState);

  return (
    <SuccessModal>
      <GainedPoint>
        <AlertBox>
          <CupImage src="/images/uploadImage/cup.svg" />
          <PointText>{userPointData.gainPoint} Point</PointText>
          <AlertText>획득하셨습니다.</AlertText>
        </AlertBox>
        <EllipseImg src="/images/uploadImage/successAlert.png" />
      </GainedPoint>
    </SuccessModal>
  );
}

const SuccessModal = styled.div`
  min-width: 360px;
  max-width: 414px;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  opacity: 90%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GainedPoint = styled.div`
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
`;

const CupImage = styled.img``;

const PointText = styled.p`
  font-family: Jeju Hallasan;
  font-size: 40px;
  line-height: 48px;
`;

const AlertText = styled.p`
  font-size: 20px;
  line-height: 30px;
`;

const EllipseImg = styled.img``;
