import { useQuery } from '@tanstack/react-query';
import { CupStore } from '../types/CupStore';
import { Coord } from '../pages/Home/Home';

export const getCupStoreByCoord = async (coord: Coord, distance: number) => {
  const request = JSON.stringify({ lat: coord.lat, lng: coord.lng, searchBoundary: distance });
  const response = await (
    await fetch('/api/map/search', {
      headers: {
        'Content-Type': 'application/json',
      },
      // body: request,
    })
  ).json();
  return response;
};

export const useGetCupStoreByCoord = (coord: Coord, distance: number, options?: object) => {
  return useQuery<{ cupStores: CupStore[]; size: number }>(
    ['cupStores'],
    () => getCupStoreByCoord(coord, distance),
    {
      enabled: false,
      ...options,
    }
  );
};
