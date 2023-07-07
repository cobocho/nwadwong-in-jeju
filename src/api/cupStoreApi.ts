import { useQuery } from '@tanstack/react-query';
import { CupStore } from '../types/CupStore';
import { Coord } from '../pages/Home/Home';

export const getCupStoreByCoord = async (coord: Coord, distance: number) => {
  const response = await (
    await fetch(
      `https://goormtone6th.com/map/search?lat=${coord.lat}&lng=${coord.lng}&searchBoundary=${distance}`
    )
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
