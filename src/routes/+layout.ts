import { getCurrentPageIndex } from '$lib/utils.js';

export function load({ url }) {
	return {
		url: url.pathname,
		thisPageIndex: getCurrentPageIndex(url.pathname)
	};
}
