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
  // if press backspace just return
  if (e.keyCode === 8) {
    return;
  } else if ((value.length == 2 || value.length == 5) && parseInt(e.key)) { // if length euqal 2 or 5
    // add point
    e.target.value = value + '.'
  } else if (value.length == 10 || !parseInt(e.key)) { // if equal 10 or it is not a digital
    e.preventDefault(); // stop event and return
  }
  return;
}
// itterate textfield collection
for (textfield of textfields) {
  // set event handler
  textfield.onkeydown = onInput;
}
