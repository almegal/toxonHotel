module.exprots = (() => {
	// get pagination
	const pagination = document.getElementsByClassName('pagination')[0];
	// initializate pagination from data-pages attribute
	const initialization = (element) => {
		// get count pages from data-pages attribute
		const pages = element.getElementsByClassName('pagination__content')[0].getAttribute('data-pages');
		// 
		const stateToSave = {
			count: pages,
			currnentPages: 2
		}
		// 
		// 
		if(!localStorage.getItem('pagination')) {
			localStorage.setItem('pagination', JSON.stringify(stateToSave));
			return;
		}
		// 
		// 
		const state = JSON.parse(localStorage.getItem('pagination'));
		const newState = {
			...state,
			...stateToSave
		}
		// 
		// 
		localStorage.setItem('pagination', JSON.stringify(newState))
	}
	
	initialization(pagination);

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
			// 
			// 
			li.className = i === pagesState.currnentPages
						 ? 'pagination__li pagination_state_current'
						 : 'pagination__li';
			li.innerHTML = `<span>${i}</span>`;
			// 
			ul.appendChild(li);
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
	createPagination(pagination.children[1]);
 })()