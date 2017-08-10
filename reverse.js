/**
 * reverseString - reverses a string
 */

function reverseString(str) {
  var array;
  array = str.split('');
  array.reverse();
  array = array.join("");
  str = array;
  return str;
}
