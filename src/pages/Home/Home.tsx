import { useEffect, useState } from 'react';
import useGeolocation from './useGeolocation';
import CurrentPositonButton from './CurrentPositonButton';
import { styled } from 'styled-components';
import { getDistance } from './getDistance';
import { useGetCupStoreByCoord } from '../../api/cupStoreApi';
import FindCurrentPositon from './FindCurrentPositon';
import { CupStore } from '../../types/CupStore';
import CupStoreItem from './CupStoreItem';

declare global {
  interface Window {
    kakao: any;
  }
}

export interface Coord {
  lat: number;
  lng: number;
}

interface Marker {
  setMap(deleted?: null): () => void;
}

interface Bounds {
  getSouthWest(): {
    La: number;
    Ma: number;
  };
}

export interface Map {
  getCenter(): {
    Ma: number;
    La: number;
    getLat(): number;
    getLng(): number;
  };
  getLevel(): number;
  getBounds(): Bounds;
  setCenter(coord: Coord): () => void;
  panTo(coord: Coord): () => void;
}

export default function Home() {
  const [map, setMap] = useState<Map | null>(null);
  const [center, setCenter] = useState<Coord>({
    lat: 37.5783209050878,
    lng: 126.894689433213,
  });
  const [currentLocation, setCurrentLocation] = useState<Coord>({
    lat: 37.5783209050878,
    lng: 126.894689433213,
  });
  const [visibleFindButton, setVisibleFindButton] = useState<boolean>(false);

  const [zoom, setZoom] = useState(5);
  const [distance, setDistance] = useState<number>(1300);
  const location = useGeolocation();
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [selectedId, setSlectedId] = useState<number | null>(null);

  const { data, refetch } = useGetCupStoreByCoord(center, distance, {
    onSuccess: (result: { cupStores: CupStore[]; size: number }) => {
      createMarkers(result.cupStores);
    },
  });

  // 현재 위치 활성화
  useEffect(() => {
    if (location.loaded) {
      setCurrentLocation(location.coordinates!);
      const centerPosition = new window.kakao.maps.LatLng(
        location.coordinates?.lat,
        location.coordinates?.lng
      );
      map?.setCenter(centerPosition);

      const content = document.createElement('div');
      content.className = 'current-location';

      const overlay = new window.kakao.maps.CustomOverlay({
        content,
        position: centerPosition,
      });

      overlay.setMap(map);
    }
  }, [location.loaded]);

  // 최초 맵 렌더링
  useEffect(() => {
    const container = document.getElementById('map'); // 지도를 표시할 div

    const options = {
      center: new window.kakao.maps.LatLng(center.lat, center.lng),
      level: zoom,
      maxLevel: 8,
    };

    const createdMap = new window.kakao.maps.Map(container, options);
    createdMap.relayout();

    window.kakao.maps.event.addListener(createdMap, 'zoom_changed', () => {
      const level = createdMap!.getLevel();
      setZoom(level);
    });

    window.kakao.maps.event.addListener(createdMap, 'dragend', () => {
      const lat = createdMap!.getCenter().getLat();
      const lng = createdMap!.getCenter().getLng();
      setCenter({
        lat,
        lng,
      });
    });

    setMap(createdMap);
  }, []);

  useEffect(() => {
    if (!data) return;
    createMarkers(data.cupStores);
  }, [selectedId]);

  // 지도 이벤트 발생
  useEffect(() => {
    if (!map) return;
    const boundPoint = map.getBounds();

    const { La: targetLng, Ma: targetLat } = boundPoint.getSouthWest();
    const distance = getDistance({
      centerLat: center.lat,
      centerLng: center.lng,
      targetLat,
      targetLng,
    });

    setVisibleFindButton(true);
    setDistance(distance);
  }, [center, zoom]);

  function createMarkers(data: CupStore[]) {
    markers.forEach((marker) => marker.setMap(null));
    const createdMarkers = data!.map((cupStore) => {
      const markerPosition = new window.kakao.maps.LatLng(cupStore.lat, cupStore.lng);
      const content = document.createElement('div');
      content.className = 'custom-overlay';
      if (selectedId === cupStore.cupStoreId) content.classList.add('selected');
      content.id = '' + cupStore.cupStoreId;
      content.innerHTML = ` 
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_5_22837)">
          <path d="M25 4.16663C16.9375 4.16663 10.4167 10.6875 10.4167 18.75C10.4167 27.4375 19.625 39.4166 23.4167 43.9791C24.25 44.9791 25.7708 44.9791 26.6042 43.9791C30.375 39.4166 39.5833 27.4375 39.5833 18.75C39.5833 10.6875 33.0625 4.16663 25 4.16663ZM25 23.9583C22.125 23.9583 19.7917 21.625 19.7917 18.75C19.7917 15.875 22.125 13.5416 25 13.5416C27.875 13.5416 30.2083 15.875 30.2083 18.75C30.2083 21.625 27.875 23.9583 25 23.9583Z" fill="#36BF9F"/>
          <circle cx="25" cy="19" r="11" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_5_22837">
          <rect width="50" height="50" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      `;

      content.addEventListener('click', () => {
        map!.panTo(markerPosition);
        setSlectedId(cupStore.cupStoreId);
        setCenter({
          lat: cupStore.lat,
          lng: cupStore.lng,
        });
      });

      const overlay = new window.kakao.maps.CustomOverlay({
        content,
        position: markerPosition,
      });

      overlay.setMap(map);
      return overlay;
    });
    setMarkers(createdMarkers);
  }

  return (
    <Container>
      <div
        id="map"
        style={{
          position: 'fixed',
          left: 0,
          top: '131px',
          width: '100vw',
          maxWidth: '414px',
          height: 'calc(100vh - 131px - 60px)',
          margin: '0 auto',
        }}
      />
      {visibleFindButton && (
        <FindCurrentPositon
          onClick={() => {
            setVisibleFindButton(false);
            refetch();
          }}
        />
      )}
      <CurrentPositonButton setCurrentLocation={setCurrentLocation} />
      {selectedId && (
        <CupStoreItem cupStore={data!.cupStores.find((item) => item.cupStoreId === selectedId)!} />
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100%;

  .current-location {
    position: relative;
    width: 20px;
    aspect-ratio: 1/1;
    background-color: #f86363;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  .custom-overlay {
    transition: all 0.4s;
    animation: appearOverlay 0.3s forwards;
    z-index: 899;

    svg {
      fill: #fff;
    }

    &:hover,
    &.selected {
      transform: scale(1.4);
    }

    &.selected {
      background-color: var(--color-main);
      z-index: 900;
    }
  }

  @keyframes appearOverlay {
    0% {
      top: 10px;
      opacity: 0;
    }
    100% {
      top: 0;
      opacity: 1;
    }
  }
`;
