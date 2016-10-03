//Функция, принимающая любое количество аргументов и поддерживающая любое количество вызовов
function getSum(a) {
	var sum = 0;
	sum += a;

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

var sum = getSum(2)(5)(5, 10)(10, 3, 2)();

console.log('sum:', sum); //20
