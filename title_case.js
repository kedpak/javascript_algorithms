
/**
 * titleCase - function capitalizes all first letters of string
 * all other letters must be lower case
 */
function titleCase(str) {

    var arr = str.split(' ');
    var lower_str = [];
    var cap_str = [];
    var final_arr = [];

    for (var i = 0; i < arr.length; i++) {
	lower_str[i] = arr[i].substring(1).toLowerCase();
	cap_str[i] = arr[i].charAt(0).toUpperCase();
	final_arr[i] = cap_str[i] + lower_str[i];
    }

    final_arr = final_arr.join(' ');

    return final_arr;
}

titleCase("I'm a little tea pot");
