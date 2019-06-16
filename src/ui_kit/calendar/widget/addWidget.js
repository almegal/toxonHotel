export const addWidget = (element, data) => {
	const tittle = element.getElementsByClassName('widget__title')[0];
	tittle.innerHTML = data.title;
	return;
};