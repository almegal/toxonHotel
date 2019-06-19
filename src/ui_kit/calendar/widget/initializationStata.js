// import 
import moment from 'moment';
// get curr date by format 01-June-2019
const currentDate = moment().format('YYYY/MM/D');
// get number of digital
// return from 0 - 11
const currentMonth = moment().month();
// name week array
const nameWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// create state to save
const stateToSave = {
	currentDate,
	currentMonth,
	nameWeek,
	rangeDates: []
};
// fucnction that will create and save to localStogare data
// which will use later
export const initializationStata = () => {
	localStorage.setItem('calendar', JSON.stringify(stateToSave));
	return stateToSave;
}