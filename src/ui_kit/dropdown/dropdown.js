module.exports = (() => {
  // get all dropdown blocks as htmlcollection
const dropdowns = document.getElementsByClassName('dropdown');
// if not exsist dropdown block
if (dropdowns.length === 0) {
  // stop script and return
  return
};

const actionHandler = e => {
  const action = e.target.getAttribute('data-action')
  if(!action) return;
  switch (action) {
    case 'arrow': //user clicked on arrow
      return arrowAction(e);
    case 'btn-plus': // user increment value
      return btnAction(e, 'plus');
    case 'btn-minus': // user decrement value
      return btnAction(e, 'minus');
    case 'clear':
      clearAction(e)
      return;
    case 'apply':
      applyAction(e)
      arrowAction(e)
      return;
    }
}
// handler for arrow click
const arrowAction = e => {
  // if element dont have attribute arrow
  // return
  const isArrow = e.target.getAttribute('data-action')
  if (!isArrow ==='arrow') return
  // get dropdown__expended element
  const expended = e.currentTarget.children[2]
  // ternanr operator
  // assign active or not
  expended.className = expended.className === 'dropdown__expended' // if true
  ? expended.className + ' dropdown-active' // add active class
  : 'dropdown__expended' // or delete active class
}

// btnAction function that takes two args event and type
// depending on the type of action
// runs block code
const btnAction = (e, type)=> {
  // get value element from item block
  const itemValueElement = e.target.parentNode.children[1];
  // get plus and minus btn
  const plusBtn = e.target.parentNode.children[2]
  const minusBtn = e.target.parentNode.children[0]
  // if type of action is plus
  if (type == 'plus') {
    // delete disabled attrubute in minus button
    minusBtn.removeAttribute('disabled')
    // increment value if value smaller than 9
    itemValueElement.innerHTML < 9 ? itemValueElement.innerHTML++ : null;
    // retrun result of ternar operator
    return itemValueElement.innerHTML == 9 // if value eqial 9
          ? plusBtn.setAttribute('disabled', 'disabled') // setAttribute disabled to btn
          : itemValueElement // or just return element
  }
  // if type of action is minus
  if(type == 'minus') {
    // delete disabled attrubute in plus button
    plusBtn.removeAttribute('disabled')
    // decrement value if  value bigger than 0
    itemValueElement.innerHTML > 0 ? itemValueElement.innerHTML-- : null;
    // retrun result of ternar operator
    return itemValueElement.innerHTML == 0// if value eqial 0
            ? minusBtn.setAttribute('disabled', 'disabled') // setAttribute disabled to btn
            : itemValueElement // or just return element
  }
  return;
}
// clearAction function
// set to all elements in blocl value 0
// make active plus btn and disabled minus btn
const clearAction = e => {
  // get dropdown__expended element
 const expendedElement = e.currentTarget.querySelector('.dropdown__expended');
 // for loop runs:
 // expendedElement.length count - 1 (without dropdown__buttons)
 for (var i = 0; i < expendedElement.childElementCount - 1; i++) {
   // get item elemnt in block by 'i'
  const itemElement = expendedElement.children[i].children[1]
  // plus and minus btn
  const plusBtn = itemElement.children[2]
  const minusBtn = itemElement.children[0]
  // set value 0
  itemElement.children[1].innerHTML = 0;
  // make plus btn active
  plusBtn.removeAttribute('disabled')
  //  disabled minus btn
  minusBtn.setAttribute('disabled', 'disabled')
 }
  return;
}
// applyAction function
// get item title and value
// and add it to placeHolder
const applyAction = e => {
  //declare variable
  let newPlaceholder = '';
  //  get dropdown__title element
  const dropdownPlaceholder = e.currentTarget.querySelector('.dropdown__placeholder');
  // get dropdown__expended element
  const expendedElement = e.currentTarget.querySelector('.dropdown__expended');
  for (var i = 0; i < expendedElement.childElementCount - 1; i++) {
    // get item elemnt in block by 'i'
   const itemElement = expendedElement.children[i]
   // get item title and value
   const itemTitle = itemElement.querySelector('.item__title').innerHTML
   const itemValue = itemElement.querySelector('.item__value').innerHTML
   // assign newPlaceholder
   newPlaceholder += itemValue + ' ' + itemTitle.toLowerCase() + ', '
  }
  // set newPlaceholder
  dropdownPlaceholder.innerHTML = newPlaceholder.slice(0, 20) + '...';
  return;
}
// for every dropdown assign handler
for (dropdown of dropdowns) {
  dropdown.onclick = actionHandler
}
// IDEA:
// Re-write handler like action
})()