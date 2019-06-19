module.exports = (() => {
// get all textfield inpiut as html collection
const textfields = document.getElementsByClassName('textfield__input');
// if textfields not in display - return
if (textfields.length === 0) {
  return;
}
//
const onInput = e => {
  // get mask by attribute
  const mask = e.target.getAttribute('data-mask')
  // if mask not exsist stop and return;
  if (!mask) return;
  // get valut in input
  const value = e.target.value;
  // if press zero or digital just return;
  if (e.keyCode == 48 || parseInt(e.key)) {
    // if length 2 or 5
    if (value.length == 2 || value.length == 5) {
      // add dot
      e.target.value = value + '.';
      // if length equal 10
    } else if (value.length == 10) {
      e.preventDefault(); // stop event and return
    }
  } else if (e.keyCode == 8) { // if backspace just return
    return;
  // if not digital
  }  else {
    e.preventDefault() // stop event and return
  }
  return;
}
// itterate textfield collection
for (textfield of textfields) {
  // set event handler
  textfield.onkeydown = onInput;
}
})()