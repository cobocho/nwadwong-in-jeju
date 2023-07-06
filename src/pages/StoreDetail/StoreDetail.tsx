import styled from "styled-components";
import { AiTwotoneStar } from "react-icons/ai";

export default function StoreDetail() {
  return (
    <>
      <ThumbnailBox>
        <ThumbnailImage src="/images/storeDetail/test1.png"></ThumbnailImage>
      </ThumbnailBox>
      <DetailHeader>
        <StoreInfo>
          <StoreName>더벤티 고성교차로점</StoreName>
          <StoreAddress>
            제주 서귀포시 성산읍 일출로 4(성산읍 고성리)
          </StoreAddress>
          <StoreHours>
            <IsOpen>운영중</IsOpen>
            <Hours>운영시간 07:30-20:30</Hours>
          </StoreHours>
        </StoreInfo>
        <Rating>
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <RatingAverage>4.0점</RatingAverage>
        </Rating>
      </DetailHeader>
    </>
  );
}

const ThumbnailBox = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const DetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const StoreName = styled.p`
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
`;

const StoreAddress = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #a1a1a1;
`;

const StoreHours = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IsOpen = styled.div`
  width: 48px;
  height: 24px;
  border: 1px solid #e1e1e8;
  background-color: #fbfbfc;
  border-radius: 8px;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hours = styled.p`
  font-size: 12px;
  line-height: 18px;
`;

const Rating = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Star = styled(AiTwotoneStar)`
  color: #96b490;
  font-size: 20px;
`;

const RatingAverage = styled.p`
  color: #525463;
  font-size: 18px;
  line-height: 27px;
  font-weight: bold;
`;
