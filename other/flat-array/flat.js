if (Array.prototype.flat !== 'function') {
	Array.prototype.flat = function() {
		var ctx = this;
		var args = arguments;
		var array = [];

		if (args[0]) {
			array = args[0];
		}
		
		for (var i = 0; i < ctx.length; i++) {
			if (Array.isArray(ctx[i])) {

				ctx[i].flat(array);
			} else {
				array.push(ctx[i]);
			}
		}
		
		return array;
	}
}

var arr = [1, 2 , [{}, 4, ['hello world', 6, 7]], 8, 9];
var flat = arr.flat();

console.log(flat);