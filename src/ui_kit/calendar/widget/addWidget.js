// import 
import moment from 'moment';

export const addWidget = (element, data) => {
	// 
	const tittle = element.getElementsByClassName('widget__title')[0];
	const widgetContent = element.getElementsByClassName('widget__content')[0];
	// set titile to widget
	tittle.innerHTML = findTitle(data);
	// 
	const ulNameWeek = createNameWeek(data);
	widgetContent.append(ulNameWeek);
	// 
	const ulDay = createDayInMoth(data);
	widgetContent.append(ulDay);
	return;
};
// 
// 
// 
// MAIN HELPERS FOR WIDGET BELOW
// 
// 
// get title
const findTitle = data => {
	// split, remove one element and join back with whitespace
	const title = data.currentDate.split('-').slice(1).join(' ');
	return title;
};
// 
const createNameWeek = data => {
	// create ul element with class widget__content
	const ul = document.createElement('ul');
	ul.className = 'widget__nameweek'
	// itterate 
	data.nameWeek.map( n => {
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
const createDayInMoth = data => {
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
		// create element and add class current
		//  case dayInMointh is range  of current month
		const li = document.createElement('li');
		// current class is modificator that make day special color
		li.className = 'widget__li current';
		li.innerHTML = i;
		// add to ul
		ul.appendChild(li);
	};
	// 	nameWeek : [ mon, tue, wed, thu, fre, sat, sun ]
	// 
	console.log(start, end)
	for (var i = daysInPrevMonth ; i > daysInPrevMonth - start; i--) {
		if (start === 0) break;
		// li element with no-current class
		const li = document.createElement('li');
		li.className = 'widget__li no-current';
		li.innerHTML = i;
		ul.insertBefore(li, ul.children[0])
	}
	// for loop runs end times 
	for (var i = 1 ; i < data.nameWeek.length - end; i++) {
		if (end === 6) break;
		// li element with no-current class
		const li = document.createElement('li');
		li.className = 'widget__li no-current';
		li.innerHTML = i;
		// add before first element
		ul.appendChild(li)
	}
	// 
	// return ul
	return ul
}