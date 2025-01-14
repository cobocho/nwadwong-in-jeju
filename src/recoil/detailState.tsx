import { atom } from 'recoil';
import { IDetailData } from '../pages/StoreDetail/StoreDetail';

export const detailState = atom<IDetailData | null>({
	key: 'detailState',
	default: null,
});

export const starIndexState = atom({
	key: 'starIndexState',
	default: 0,
});

export const modalState = atom({
	key: 'modalState',
	default: false,
});

export const averageRatingState = atom({
	key: 'averageRatingState',
	default: '0.0',
});
