//Шаблон изолированного пространства имен
Super.modules = {};

Super.modules.dom = function(box) {
	box.getElement = function () {
		console.log('dom: box.getElement apply!');
		//что-то сложное
	}
	box.render = function () {
		console.log('dom: box.render apply!');
		//что-то невообразимое
	}
};
Super.modules.event = function(box) {
	box.addListener = function () {
		console.log('event: box.addListener apply!');
	}
	box.removeListener = function () {
		console.log('event: box.removeListener apply!');
	}
}

function Super() {
	var args = [].slice.call(arguments);
	var callback = args.pop();
	var modules = args[0];
	var i = 0;

	if (!(this instanceof(Super))) {
		return new Super(modules, callback);
	}

	for (; i < modules.length; i++) {
		Super.modules[modules[i]](this);
	}

	callback(this);
}

new Super(['dom', 'event'], myController);

function myController(sandbox) {
	sandbox.render(); // dom: box.render apply!
	sandbox.addListener(); // event: box.addListener apply!
}