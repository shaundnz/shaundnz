import { writable } from 'svelte/store';

export const pageIndexStore = writable({ currentPageIndex: 0, previousPageIndex: -1 });

export const setCurrentPageIndex = (currentPageIndex: number) => {
	pageIndexStore.update((store) => {
		const newPrevious = store.currentPageIndex;
		return {
			currentPageIndex,
			previousPageIndex: newPrevious
		};
	});
};
