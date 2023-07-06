import { styled } from 'styled-components';
import { Coord } from './Home';
import { useEffect, useState } from 'react';
import useGeolocation from './useGeolocation';

interface Props {
  setCurrentLocation: React.Dispatch<React.SetStateAction<Coord>>;
}

const CurrentPositonButton = ({ setCurrentLocation }: Props) => {
  const location = useGeolocation();

  useEffect(() => {
    if (location.loaded) {
      setCurrentLocation(location.coordinates!);
    }
  }, [location.loaded]);

  return (
    <Container>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="24"
          fill="rgba(161, 161, 161, 0.2)"
        />
        <g>
          <path
            d="M23.5 17.6666C20.2771 17.6666 17.6667 20.277 17.6667 23.4999C17.6667 26.7228 20.2771 29.3333 23.5 29.3333C26.7229 29.3333 29.3333 26.7228 29.3333 23.4999C29.3333 20.277 26.7229 17.6666 23.5 17.6666ZM36.5375 22.0416C35.8667 15.9603 31.0396 11.1333 24.9583 10.4624V8.91659C24.9583 8.1145 24.3021 7.45825 23.5 7.45825C22.6979 7.45825 22.0417 8.1145 22.0417 8.91659V10.4624C15.9604 11.1333 11.1333 15.9603 10.4625 22.0416H8.91668C8.11459 22.0416 7.45834 22.6978 7.45834 23.4999C7.45834 24.302 8.11459 24.9583 8.91668 24.9583H10.4625C11.1333 31.0395 15.9604 35.8666 22.0417 36.5374V38.0833C22.0417 38.8853 22.6979 39.5416 23.5 39.5416C24.3021 39.5416 24.9583 38.8853 24.9583 38.0833V36.5374C31.0396 35.8666 35.8667 31.0395 36.5375 24.9583H38.0833C38.8854 24.9583 39.5417 24.302 39.5417 23.4999C39.5417 22.6978 38.8854 22.0416 38.0833 22.0416H36.5375ZM23.5 33.7083C17.8563 33.7083 13.2917 29.1437 13.2917 23.4999C13.2917 17.8562 17.8563 13.2916 23.5 13.2916C29.1438 13.2916 33.7083 17.8562 33.7083 23.4999C33.7083 29.1437 29.1438 33.7083 23.5 33.7083Z"
            fill="#A2A2A2"
          />
        </g>
      </svg>
    </Container>
  );
};

const Container = styled.button`
  position: absolute;
  right: 20px;
  bottom: 40px;
  background-color: transparent;
  border: none;
  z-index: 999;

  &:hover {
    cursor: pointer;
  }
`;

export default CurrentPositonButton;
