exports.module = (() => {
	// get contetn by filter views
const content = document.getElementsByClassName('filter__content')[0];
// if content not exsist stop script
if(!content) {
	return null
}
// 
const clickHandler = (e) => {
	const action = e.target.getAttribute('data-action');
	if(action !== 'filter') return null;
	return toggleHandler(e);
}

const toggleHandler = e => {
		// get elements
	const filter = e.currentTarget;
	// 
	// 
	window.scrollTo({top: 0});
	filter.className = filter.className === 'filter__content' ? 'filter__content opened' : 'filter__content';
}
// 
// 
content.onclick = clickHandler;
// 
// 
})()