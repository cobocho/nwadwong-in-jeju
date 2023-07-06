import { useEffect, useState } from 'react';
import useGeolocation from './useGeolocation';
import CurrentPositonButton from './CurrentPositonButton';
import { styled } from 'styled-components';
import { getDistance } from './getDistance';
import { useGetCupStoreByCoord } from '../../api/cupStoreApi';
import FindCurrentPositon from './FindCurrentPositon';

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
  const [distance, setDistance] = useState<number>(1500);
  const location = useGeolocation();

  const { data, isLoading, refetch } = useGetCupStoreByCoord(center, distance);

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
      refetch();
    }
  }, [location.loaded]);

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

  return (
    <Container>
      <div
        id="map"
        style={{ width: '100%', height: '100%' }}
      />
      {visibleFindButton && (
        <FindCurrentPositon
          onClick={() => {
            setVisibleFindButton(false);
          }}
        />
      )}
      <CurrentPositonButton setCurrentLocation={setCurrentLocation} />
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
`;
