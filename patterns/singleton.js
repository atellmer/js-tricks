//Синглтон
function Singleton() {
	var instance = this;

	Singleton = function Singleton() {
		return instance;
	}

	instance.prop = 'some prop';

	return instance;
}

var o1 = new Singleton();
var o2 = new Singleton();


console.log(o1 === o2); //true