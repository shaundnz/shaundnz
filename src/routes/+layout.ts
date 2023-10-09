import { getCurrentPageIndex } from '$lib/utils.js';

export const prerender = true;

export function load({ url }) {
	return {
		url: url.pathname,
		thisPageIndex: getCurrentPageIndex(url.pathname)
	};
}
