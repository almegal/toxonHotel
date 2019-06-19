// imports action
import { arrowAction, pickAction, leftAction, rightAction } from './action/index.js';
//  import helpers
import { addWidget } from './widget/addWidget.js'
import { initializationStata } from './widget/initializationStata.js'
// 
// get all calendar elements as html collections
const calendars = document.getElementsByClassName('calendar');

// create handler
const clickHandler = e => {
	// get tyoe of action from custom attribute
	const action = e.target.getAttribute('data-action');
	//  if empty - return
	if (!action) return;
	// by special action
	// return handler
	let data;
	switch (action) {
	 	case 'arrow': 
	 		// get calendar__content element 
	 		const element = e.currentTarget.children[1];
	 		return arrowAction(element); 
	 	case 'left':
	 		return leftAction(e, localStorage);
		case 'right': 
	 		return rightAction(e, localStorage);
	 	case 'pick': 
	 		return pickAction(e, localStorage);
	 }
	return;
}
// 
// initialize state
const data = initializationStata();
for (let calendar of calendars) {
	addWidget(calendar, data);
	calendar.onclick = clickHandler;
};