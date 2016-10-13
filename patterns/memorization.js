//Шаблон мемоизации (кеширования)
var memo = function () {
	var params = JSON.stringify([].slice.call(arguments)); //уникальный хэш
	var result = {};

	if (!memo.cache[params]) {
		//Какие-либо дорогостоящие операции, которые нужно закешировать
		result.value = [].slice.call(arguments);
		//
		memo.cache[params] = result;
	}

	return memo.cache[params];
}
memo.cache = {};

console.log(memo(1));
console.log(memo([1, 2, 3, 4]));
console.log(memo(1, {}, 'value'));
console.log(memo(1)); //значение берется уже из кэша, а не считается заново

console.log(memo.cache);