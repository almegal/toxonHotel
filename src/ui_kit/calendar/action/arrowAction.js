// take element and just added or delete opened class
export const arrowAction = e => {
	return e.className = e.className == 'calendar__content'
						 ? e.className + ' opened' 
						 : 'calendar__content';
}
