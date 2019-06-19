// 
import { findTitle, createNameWeek, createDayInMoth } from './utils.js'
// 
export const addWidget = (element, data) => {
	// 
	const tittle = element.getElementsByClassName('widget__title')[0];
	const widgetContent = element.getElementsByClassName('widget__content')[0];
	// clear content
	widgetContent.innerHTML = '';
	// set titile to widget
	tittle.innerHTML = findTitle(data);
	// 
	const ulNameWeek = createNameWeek(data.nameWeek);
	widgetContent.append(ulNameWeek);
	// 
	const ulDay = createDayInMoth(data);
	widgetContent.append(ulDay);
	return;
};