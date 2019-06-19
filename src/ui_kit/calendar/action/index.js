import { addClass, saveToLocalStorage } from '../widget/utils.js';
import { addWidget } from '../widget/addWidget.js';
// take element and just added or delete opened class
export const arrowAction = e => {
	return e.className = e.className == 'calendar__content'
						 ? e.className + ' opened' 
						 : 'calendar__content';
}
// 
// 
export const leftAction = (e, state ) => {
	const data = JSON.parse(state.getItem('calendar'));
	saveToLocalStorage('calendar', {currentMonth: data.currentMonth - 1});
	return addWidget(e.currentTarget, {...data, currentMonth: data.currentMonth - 1});
}
// 
// 
export const rightAction = (e, state) => {
	const data = JSON.parse(state.getItem('calendar'));
	saveToLocalStorage('calendar', {currentMonth: data.currentMonth + 1});
	return addWidget(e.currentTarget, {...data, currentMonth: data.currentMonth + 1});
}
// 
// 
export const pickAction = (e, state) => {
	const dmy = e.target.children[0].getAttribute('data-moment').split(',').join('/')
	const data = JSON.parse(state.getItem('calendar'))
	saveToLocalStorage('calendar', {rangeDates: [...data.rangeDates, dmy]})
	return addClass(dmy)
};