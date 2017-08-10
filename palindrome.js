/** 
 * palindrome - function checks if string is palindrome
 * Returns true if string is palindrome, false if not
 * ignores whitespace and special characters
 */

function palindrome(str) {
    var new_str = str.replace(/\s+/g, '').toLowerCase();
    var spec = ['-', '_', ',', '.', ')', '(', '\\', '/'];
    var fil = new_str.split('');
  
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
