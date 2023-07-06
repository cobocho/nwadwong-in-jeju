import { styled } from 'styled-components';

const MapHeader = () => {
  return (
    <Container>
      <div className="upper">
        <h2>방문객님, 제주도에 컵 놔뒁</h2>
      </div>
      <div className="lower">
        <div className="cup-type">
          <div className="circle reusable" />
          <p>다회용컵</p>
        </div>
        <div className="cup-type">
          <div className="circle disposable" />
          <p>일회용컵</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .upper {
    display: flex;
    align-items: center;
    height: 94px;
    border-bottom: 1px solid #858899;

    h2 {
      margin-left: 20px;
      font-weight: 700;
      font-size: 24px;
    }
  }
  .lower {
    display: flex;
    align-items: center;
    height: 48px;
    gap: 20px;

    .cup-type {
      margin-left: 20px;
      display: flex;
      gap: 4px;

      .circle {
        width: 14px;
        height: 14px;
        border-radius: 50%;

        &.reusable {
          background-color: #36bf9f;
        }
        &.disposable {
          background-color: #08785e;
        }
      }
    }
  }
`;

export default MapHeader;
