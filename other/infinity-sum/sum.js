//Функция, принимающая любое количество аргументов и поддерживающая любое количество вызовов
function getSum() {
	var sum = 0;

	var args = Array.prototype.map.call(arguments, function(v) {
			return v;
	});
	if (args.length === 0) {
		return sum;
	} else {
		args.forEach(function(v) {
				sum += v;
		});
	}

	function next() {
		var args = Array.prototype.map.call(arguments, function(v) {
			return v;
		});

		if (args.length === 0) {
			return sum;
		} else {
			args.forEach(function(v) {
				sum += v;
			})
			return next;
		}
	}

	return next;
}

var sum = getSum(2, 3)(10)(5, 1)();

console.log('sum:', sum); //37
