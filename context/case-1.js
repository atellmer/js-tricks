function Class1() {
	this.name = 'I am Class 1';
	this.say = function () {
		console.log('method context: ', this);
		(function () {
    	console.log('function context: ', this);
    	console.log('утеря контекста, this ссылается на глобальный объект');
    })();
	}
}

function Class2() {
	this.name = 'I am Class 2';
	this.say = function () {
		console.log('method context: ', this);
		var self = this;
		(function (ctx) {
    	console.log('function context: ', ctx);
    	console.log('контекст сохранен и передан явно');
    })(self);
	}
}

function Class3() {
	this.name = 'I am Class 3';
	this.say = function () {
		console.log('method context: ', this);
    (() => {
    	console.log('function context: ', this);
    	console.log('ES2015, стрелочные функции сохраняют контекст');
    })();
	}
}

var instance1 = new Class1();
var instance2 = new Class2();
var instance3 = new Class3();

instance1.say();
instance2.say();
instance3.say();