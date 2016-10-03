var arr = [1, 3, -2, 5, 4];

sortAscending(arr).forEach(function(v) {
	console.log(v); 
}); //отсортировано по ворастанию

sortDescending(arr).forEach(function(v) {
	console.log(v); 
}); //отсортировано по убыванию


function sortAscending(arr) {
	return arr.sort(function(a, b) {
		return a - b;
	});
}

function sortDescending(arr) {
	return arr.sort(function(a, b) {
		return b - a;
	});
}
