//setTimeout курильщика
for (var i = 0; i < 10; i++) {
	setTimeout(function() {
		console.log(i);
	}, 0);
}
//выведет 10 раз по 10

//setTimeout здорового человека
setTimeout(function() {
	for (var i = 0; i < 10; i++) {
		console.log(i);
	}
}, 0);
//выведет 10 раз числа от 0 до 9
