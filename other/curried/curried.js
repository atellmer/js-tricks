/*Напишите функцию curried, реализующую каррирование. 
curried должна откладывать выполнение оригинальной функции до тех пор, пока в неё не будет передано нужное количество аргументов. 
При этом ранее переданные аргументы «прибиваются» по аналогии с bind.*/

function curried(fn) {
	var allArgs = [];
	
	return function next() {
		allArgs = allArgs.concat([].slice.call(arguments));
		var result = 0;

		if (fn.length === allArgs.length) {
			result = fn.apply(null, allArgs);
			allArgs = allArgs.slice(0, 1);
			return result;	
		} 
		return next;
	}
}

function add(a, b) {
	return a + b;
}

console.log('result:', curried(add)(1, 2)); //3
console.log('result:', curried(add)(2)()(4)); //6
console.log('result:', curried(add)()(5)()(10)); //15


var increment = curried(add)(1);

console.log('result:', increment(5)); //6
console.log('result:', increment(100)); //101