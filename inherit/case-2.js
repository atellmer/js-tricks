//Множественное наследование
if (typeof Object.prototype.extend === 'undefined') {
	Object.prototype.extend = function () {
		var ctx = this;
		var args = [].slice.call(arguments);

		args.forEach(function(item) {
				var fn = [].slice.call(arguments)[0];

				if (typeof fn === 'function') {
					var instance = new fn();

					for (var key in instance) {
						if (instance.hasOwnProperty(key)) {
							ctx[key] = instance[key];
						}
					}
				} else {
					item.call(ctx);
				}
		});

		return ctx;
	}
}

function Human() {
	this.kind = 'Homo Sapiens';
}

function Child(name, age) {
	this.name = name;
	this.age = age;
}

function Student(subjects) {
	this.subjects = subjects;
}

var alex = new Student(['mathematics', 'computer scince']).extend(Human, Child.bind(null, 'Alex', 27));

console.log(alex);

/*
Student {
  subjects: [ 'mathematics', 'computer scince' ],
  kind: 'Homo Sapiens',
  name: 'Alex',
  age: 27 
 }
*/
