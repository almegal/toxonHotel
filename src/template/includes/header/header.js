// get header element 
const header = document.getElementsByClassName('header')[0];

const clickHanlder = e => {
	// get action attribute from event
	const action = e.target.getAttribute('data-action');
	// if element where event happened 
	// dont have data-action atribute
	if(!action) return; // return
	// 
	switch(action) {
	  case 'toggle':  // if action = toggle
	  	return toggleAction(e);
	  // case 'item':  // if action = item
	 	// return itemMenuAction(e);
	}
	// 
}

const toggleAction = e => {
	// get elements
	const menu = e.currentTarget.getElementsByClassName('header__right')[0];
	const toggle = e.currentTarget.getElementsByClassName('header__toggle')[0];
	// 
	// 
	menu.className = menu.className === 'header__right' ? 'header__right opened' : 'header__right';
	toggle.className = toggle.className === 'header__toggle' ? 'header__toggle opened' : 'header__toggle';

}
/*
const itemMenuAction = e => {
	const location = window.location;
	const uri = location.href;
	const hash = e.target.innerHTML;
	location.replace(uri + hash)
}
*/
header.onclick = clickHanlder;