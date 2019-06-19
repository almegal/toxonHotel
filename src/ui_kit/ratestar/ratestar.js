module.exports = (() => {
// get all ratestar as html collection
const ratestarCollections = document.getElementsByClassName('ratestar');
// if ratestar not in display - return
if (ratestarCollections.length === 0) {
  return;
}

// click handler
const clickHandler = e => {
  // if not clicked span
  if(e.target.tagName !== 'SPAN') return; // return
  // get starId when click hapened
  // by custom attrubute
  const starId = e.target.getAttribute('data-star');
  // get count of star in current element
  const starCount = e.target.parentNode.childElementCount;
  // get className where click hapened
  const className = e.target.className;
  // if true run this block
  if(className == 'ratestar__star') {
    // run for loop
    for (var i = 0; i <= starId; i++) {
      // and set star active
      e.target.parentNode.children[i].className = 'ratestar__star active'
    }
    //
    return;
  }
  // if not attrubute
  // runs this for loop
  for (var i = starCount - 1; i > starId; i--) {
    // set no active star
    e.target.parentNode.children[i].className = 'ratestar__star'
  }
}
// itterate ratestar collection
for (ratestar of ratestarCollections) {
  // set event handler
  ratestar.onclick = clickHandler;
}

})()