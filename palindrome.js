/** 
 * palindrome - function checks if string is palindrome
 * Returns true if string is palindrome, false if not
 * ignores whitespace and special characters
 * string converted into list and converted back into string
 */

function palindrome(str) {

    /* new string strips whitespace and sets all letters to lower case */
    var new_str = str.replace(/\s+/g, '').toLowerCase();
    var spec = ['-', '_', ',', '.', ')', '(', '\\', '/']; /* array contains characters to ignore*/
    var fil = new_str.split('');
  
    /* loop strips out special characters from string */
    for (var i = 0; i < new_str.length; i++) {
	for (j = 0; j < spec.length; j++) {
	    if (fil[i] === spec[j]) {
		fil.splice(i, 1);
	    }
	} 
    }

    new_str = fil;
    if (fil.reverse().join('') === new_str.reverse().join('')) {
	return true;
    }
    else {
	return false;
    }
}

palindrome("eye");
