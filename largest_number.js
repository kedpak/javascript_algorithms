/**
 * l_num - return the largest number in each sub array of array
 * Array is multidimensional and has 4 sub arrays
 * returns an array of largest number of each sub array
 */

function l_num(array) {

    var i = 0;
    var j = 0;
    var max;
    var max_arr = [];
    
    for (i = 0; i < arr.length; i++) {
	max = arr[i][0];
	for (j = 0; j < arr[i].length; j++) {
	    if (arr[i][j] > max) {
		max = arr[i][j];
	    }
	}
	max_arr.push(max);
    }
    return max_arr;
}

l_num([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
