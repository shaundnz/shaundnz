export const getCurrentPageIndex = (url: string) => {
	if (url.includes('/projects')) {
		return 1;
	} else if (url.includes('/experience')) {
		return 2;
	} else {
		return 0;
	}
};
