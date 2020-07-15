/*
WAP to merge 2 sorted arrays such that the resultant array is also sorted .
Eg: [0, 3, 4, 31] and [4, 6, 30] will result in [0, 3, 4, 4, 6 30, 31]
*/
function mergeSortedArrays(array1, array2) {
	const mergedArray = []
	let array1Item = array1[0]
	let array2Item = array2[0]
	let i = 1
	let j = 1
	// check input
	if (array1.length === 0) {
		return array2
	}
	if (array2.length === 0) {
		return array1
	}
	while (array1Item || array2Item) {

		if (!array2Item || array1Item < array2Item) {
			mergedArray.push(array1Item)
			array1Item = array1[i]
			i++;
		}
		else 	 {
			mergedArray.push(array2Item)
			array2Item = array2[j]
			j++;
		}
	}
	return mergedArray
}
const arr1 = [0, 3, 4, 31]
const arr2 = [4, 6, 30]
console.log(mergeSortedArrays(arr1, arr2))