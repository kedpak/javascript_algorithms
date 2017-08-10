
/**
 * findLongestWord - finds the longest word inside of a string
 * string will be delimited at spaces
 * returns the string length of the longest word
 * strips all words from string that is not longest from orignal string
 */
function findLongestWord(str) {
  
    var longest = 0;
    var arr;

    if (str === null) {
	return;
    }

    /* splits string into array of words of string " */
    arr = str.split(" ");

    /* loop finds length of longest word */
    for (var i = 0; i < arr.length; i++) {
	if (arr[i].length > longest) {
	    longest = arr[i].length;
	}
    }

    var arr2 = [];
    
    /* if word in array equals the length of longest, append to array */
    for (var j = 0; j < arr.length; j++) {
	if (arr[j].length === longest) {
	    arr2.push(arr[j]);
	    break;
	}
    }

    /* converts array of longest word back into string */
    str = arr2.join('');

    return str.length;
}


findLongestWord("The quick brown fox jumped over the lazy dog");
