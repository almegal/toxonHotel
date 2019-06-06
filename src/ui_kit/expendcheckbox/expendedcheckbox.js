// get all expendcheckbox blocks as htmlcollection
const expendedcheckbox = document.getElementsByClassName('expendcheckbox');
// if not exsist dropdown block
if (expendedcheckbox.length === 0) {
  // stop script and return
  return;
}
// handler for arrow click
const arrowAction = e => {
  // if element dont have attribute arrow
  // return
  const isArrow = e.target.getAttribute('data-action')
  if (isArrow !=='arrow') return
  // get expenedcheckbox element
  const expended = e.currentTarget.querySelector('.expendcheckbox__content');
  // ternanr operator
  // assign active or not
  expended.className = expended.className === 'expendcheckbox__content' // if true
  ? expended.className + ' expendcheckbox-active' // add active class
  : 'expendcheckbox__content' // or delete active class
  //
  //
  if (expended.className == 'expendcheckbox__content expendcheckbox-active') {
    console.log('wow');
    e.target.className = 'expendcheckbox__arrow open'
  } else {
    e.target.className = 'expendcheckbox__arrow'
  }
  console.log(e.target);
}
// for every expendcheckbox assign handler
for (expendedcheck of expendedcheckbox) {
  expendedcheck.onclick = arrowAction
}
