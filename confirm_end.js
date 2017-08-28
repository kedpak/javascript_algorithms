/**
 * confirmEnd - check if string ends with target string
 * does not use endsWith() method
 */

function confirmEnd(string, target) {
    var str_len;
    var str_list;
    var arr_len;

    str_list = str.split(" ");
    arr_len = str_list.length;
    str_len = str_list[arr_len - 1];

    for (var i = 0; i < str_len.length; i++) {
	if (str_len.substring(i, str_len.length) === target) {
	    return true;
	}
    }

    return false;
}

confirmEnd("whats up dude", "dude");
