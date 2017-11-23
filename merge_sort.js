/*
sort array of integers using merge sort
Time complexity of merge sort is O(n*logn) in all cases
*/

/**
 * merge - merges two seperate arrays into one new sorted array
 * L- left array
 * R- right array
 * returns newly merged sorted array 
 */
function merge(L, R) {

    let newArray = [];

    while (L.length && R.length ) {
	if (L[0] > R[0]) {
	    newArray.push(R.shift());
	 } else {
	     newArray.push(L.shift());
	 }
    }

    /*These two loops take care if R or L have a single element 
    left in array to push
    */

    while (L.length){
	console.log("l.length " + newArray);
        newArray.push(L.shift());
	}

    while (R.length){
	console.log("r.length " + newArray);
        newArray.push(R.shift());
	console.log("r.length after " + newArray);
	} 
    return newArray;
}


/**
 * merge_sort - breaks up array into two halves
 * Two halves are recursively sorted and merged
 * arr - array to be sorted
 * returns merge function or arr if array less than 2
 */
function merge_sort(arr) {
    
    if (arr.length < 2) {
	return arr;
    }
    let L = arr.slice(0, arr.length/2);
    let R = arr.slice(arr.length/2, arr.length);

    return merge(merge_sort(L), merge_sort(R));
}


function main() {
    let array = [41, 6, 24, 11, 31, 9, 19];

    console.log(merge_sort(array));
}

main();
