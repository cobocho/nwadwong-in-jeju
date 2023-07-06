import { styled } from 'styled-components';
import ShadowButton from '../../components/Button/ShadowButton';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userState from '../../recoil/userState';

export default function DonataionInputPage() {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  async function postDonation() {
    await fetch('/api/donation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')!,
      },
      body: JSON.stringify({
        donationPoint: ref.current?.value,
        organizationId: 1,
      }),
    });
    navigate('/home');
  }

  return (
    <Container>
      <div className="post-donation">
        <input
          ref={ref}
          type="number"
          min={100}
          max={1000000}
          step={100}
          maxLength={10}
        />
        <p className="current-point">총 {user?.point.toLocaleString()}원 보유</p>
        <ShadowButton onClick={postDonation}>포인트 기부하기</ShadowButton>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .post-donation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 200px;

    .current-point {
      color: #b3b3b3;
    }

    input {
      width: 200px;
      height: 50px;
      border: none;
      border-bottom: 2px solid #000;
      font-size: 24px;
      text-align: center;
    }
  }
`;
