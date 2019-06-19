// import 
import moment from 'moment';
// 
// 
// 
export const saveToLocalStorage = (id, data) => {
	const state = JSON.parse(localStorage.getItem(id));
	const newState = {
		...state,
		...data
	}
	localStorage.setItem(id, JSON.stringify(newState));
}
// 
// 
// 
// MAIN HELPERS FOR WIDGET.js BELOW
// 
// 
// get title
export const findTitle = data => {
	// take current moth from data
	// pass in moment object 
	// and fotmat to string 'MMMM YYYYY' (June 2019) e.x
	const title = moment().month(data.currentMonth).format('MMMM YYYY');
	// return result
	return title;
};
// Function take data as arg
// create ul list from data
export const createNameWeek = data => {
	// create ul element with class widget__content
	const ul = document.createElement('ul');
	ul.className = 'widget__nameweek'
	// itterate 
	data.map( n => {
		// create li element
		const li = document.createElement('li');
		// add name of week wrap p tag
		li.innerHTML = `<p>${n}</p>`;
		// add to ul
		ul.appendChild(li);
	})
	// return ul
	return ul;
}
// this functino create ul element with days in current month
// also added some days from prev or next month to fill grid
export const createDayInMoth = data => {
	// helpers
	// will save later first and last name week
	let end, start;
	// create ul element with class
	const ul = document.createElement('ul');
	ul.className = 'widget__days'
	// get count of day in 
	// current month 
	// prev month
	const month = data.currentMonth;
	const daysInMonth = moment().month(month).daysInMonth();
	const daysInPrevMonth = moment().month(month - 1).daysInMonth();
	// run loop daysInmonth times
	for (let i = 1; i <= daysInMonth; i++) {
		if (i > daysInMonth) break; // if i bigger than daysInMoith - break;
		// if first element save name of week to start
		if (i === 1) {
			start = moment().month(month).date(i).format('ddd');
			start = data.nameWeek.indexOf(start)
		}
		// if last element save name of week to end
		if (i === daysInMonth) {
			end = moment().month(month).date(i).format('ddd');
			end = data.nameWeek.indexOf(end)
		}
		// 
		const date = moment().month(month).date(i).format('YYYY/MM/D').split('/')
		// 
		// dayInMonth is range  of current month
		const li = document.createElement('li');
		// current class is modificator that make day special color
		li.className = addClass(date.join('/'),);
		li.innerHTML = `<span data-moment=${date}>${date[2]}</span>`;
		li.setAttribute('data-action', 'pick');
		// add to ul
		ul.appendChild(li);
	};
	// 	run loop daysInPrevMOnth - start times
	// let fill grid wiht days from prev month
	for (var i = daysInPrevMonth ; i > daysInPrevMonth - start; i--) {
		if (start === 0) break; // return if start 0
		// li element with no-current class
		const date = moment().month(month - 1).date(i).format('YYYY/MM/D').split('/')
		// 
		const li = document.createElement('li');
		li.className = 'widget__li no-current';
		li.innerHTML = `<span data-action=${date}>${date[2]}</span>`;
		li.setAttribute('data-action', 'pick')
		// insert elemment before firstchild
		ul.insertBefore(li, ul.children[0])
	}
	// for loop runs end times 
	for (var i = 1 ; i < data.nameWeek.length - end; i++) {
		if (end === 6) break;
		// li element with no-current class
		const date = moment().month(month + 1).date(i).format('YYYY/MM/D').split('/')
		// 
		const li = document.createElement('li');
		li.className = 'widget__li no-current';
		li.innerHTML = `<span data-action=${date}>${date[2]}</span>`;
		li.setAttribute('data-action', 'pick')
		// add before first element
		ul.appendChild(li)
	}
	// 
	// return ul
	return ul
} 
// fucntion return class
export const addClass = (date, localData = localStorage) => {
	//  get state from localStorege
	const state = JSON.parse(localData.getItem('calendar'));
	// ternary operator
	const className = moment(date, 'YYYY/MM/D').isSame(state.currentDate) && state.rangeDates.length === 0
					? 'widget__li current' // return if true
					: 'widget__li'; // return if false;
	//return 
	return className
};

// 
// 
// 