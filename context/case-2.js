//Полифил для bind ('binder')

if (typeof Function.prototype.binder === 'undefined') {
	Function.prototype.binder = function() {
		var method = this;
		var context = arguments[0];
		var args = [];
		var i = 1;

		for (; i < arguments.length; i++) {
			args[i - 1] = arguments[i];
		}

		return function() {
			return method.apply(context, args);
		}
	}
}

var user = {
	name: 'Alex',
	say: function(a, b, c) {
		return 'I am ' + this.name + ' ' + a + ' ' + b + ' ' + c;
	}
}

function fn(callback) {
	return callback();
}

console.log(fn(user.say.binder(user, 1, 2, 3)));
