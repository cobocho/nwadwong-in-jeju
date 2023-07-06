import React from 'react';
import { styled } from 'styled-components';

const SmileLogo = () => {
  return (
    <Container>
      <img
        src="/logo/cup.png"
        alt="cup"
        className="cup"
      />
      <img
        src="/logo/smile.png"
        alt="smile"
        className="smile"
      />
      <img
        src="/logo/title.png"
        alt="title"
        className="title"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 200px;

  .cup {
    animation: appearFromBottom 1s;
  }

  .smile {
    position: absolute;
    top: 80px;
    transform: scale(0);
    animation: appearSmile 0.8s 0.8s forwards;
  }

  .title {
    position: absolute;
    top: 230px;
    opacity: 0;
    animation: appearFromBottom 1s 0.3s forwards;
  }

  @keyframes appearFromBottom {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes appearSmile {
    0% {
      transform: scale(0);
    }
    80% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default SmileLogo;
