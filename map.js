function map(arr, callback){
	let new_arr = []
	for(let i = 0; i < arr.length; i++){
		new_arr.push(callback(arr[i]))
	}
	return new_arr
}
