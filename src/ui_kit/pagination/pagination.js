module.exprots = (() => {
	// get pagination
	const pagination = document.getElementsByClassName('pagination')[0];
	if(!pagination) {
		return;
	}
	// initializate pagination from data-pages attribute
	const initialization = (element=null) => {
		// get count pages from data-pages attribute
		//  in real set count of pages from servre via localstorage or set to data-pages atrribute
		// const pages = element.getElementsByClassName('pagination__content')[0].getAttribute('data-pages');
		// set state to pagination
		const stateToSave = {
			count: 15,
			currentPages: 1
		}
		// if pagintation state exsist
		//  save to current state
		if(!localStorage.getItem('pagination')) {
			localStorage.setItem('pagination', JSON.stringify(stateToSave));
			return;
		}
		// create pagistation state
		//  
		const state = JSON.parse(localStorage.getItem('pagination'));
		const newState = {
			...state,
			...stateToSave
		}
		// 
		// save to state
		localStorage.setItem('pagination', JSON.stringify(newState))
	}
	// 
	// 
	const createPagination = (parentNode) => {
		// 
		// 
		const ul = document.createElement('ul');
		ul.className = 'pagination__ul';
		// 
		const pagesState = JSON.parse(localStorage.getItem('pagination'));
		// 
		for (var i = 1; i <= pagesState.count; i++) {
			// 
			const li = document.createElement('li');
			if (i === pagesState.count - 1) {
				li.className = i === pagesState.currentPages
							 ? 'pagination__li pagination_state_current'
							 : 'pagination__li';
				li.innerHTML = `<span>...</span>`;
				// 
				ul.appendChild(li);
			}

			if(i < 4 || i === pagesState.count) {
				// 
				// 
				li.className = i === pagesState.currentPages
							 ? 'pagination__li pagination_state_current'
							 : 'pagination__li';
				li.innerHTML = `<span>${i}</span>`;
				// 
				ul.appendChild(li);
			}
		};
		// 
		// 
		const img = document.createElement('img')
		img.src = 'public/arrowWhite.svg'
		img.className = 'pagination__rightarrow'
		// 
		// 
		const li = document.createElement('li');
		li.className = 'pagination__prev';
		li.appendChild(img)
		// 
		ul.appendChild(li);
		// 
		// 
		parentNode.appendChild(ul);
	};
	// 
	// 
	// call initiazlization without arguments;
	initialization();
	// 
	createPagination(pagination.children[1]);
 })()