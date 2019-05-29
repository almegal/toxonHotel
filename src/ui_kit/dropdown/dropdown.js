// get all dropdown as htmlcollection
const dropdowns = document.getElementsByClassName('dropdown');
// if not exsist dropdown block
if (dropdowns.length === 0) {
  // stop script and return
  return;
}
// handler for arrow click
const handlerClick = (e) => {
  // if element dont have attribute arrow
  // return
  const isArrow = e.target.getAttribute('data-arrow')
  if (!isArrow) return
  // get dropdown__expended element
  const expended = e.currentTarget.children[2]
  // ternanr operator
  // assign active or not
  expended.className = expended.className === 'dropdown__expended' // if true
  ? expended.className + ' dropdown-active' // add active class
  : 'dropdown__expended' // or delete active class
}

// for every dropdown assign handler
for (dropdown of dropdowns) {
  dropdown.onclick = handlerClick
}
