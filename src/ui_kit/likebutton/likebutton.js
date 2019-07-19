exports.module = (() => {
  // get all dropdown blocks as htmlcollection
const likebuttons = document.getElementsByClassName('likebutton__label');
// if not exsist dropdown block
if (likebuttons.length === 0) {
  // stop script and return
  return;
}
const likebuttonHandler = e => {
  // get checked status
  const checked = e.currentTarget.children[0].checked;
  // if true
  if(checked) {
    // increment value
    e.currentTarget.children[2].innerHTML++
  } else if(!checked) { // if false
    // decrement
    e.currentTarget.children[2].innerHTML--
  }
  return;
}
// assign every likebutton__label onchange handler
for (likebutton of likebuttons) {
  likebutton.onchange = likebuttonHandler;
}

})()