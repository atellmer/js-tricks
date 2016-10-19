//Множественное наследование
if (typeof Object.prototype.extend === 'undefined') {
	Object.prototype.extend = function() {
		var self = this;
		Array.prototype.forEach.call(arguments, function(Ctor) {
			var ctor = new Ctor;
			for (var i in ctor) {
				self[i] = ctor[i];
			}
		});
		return self;
	}
}

function Device() {
	this.identme = function() {
		return 'I am device';
	}
}

function Printer() {
	this.print = function() {
		return 'print '.repeat(3);
	}
}

Printer.prototype = new Device();

function Scaner() {
	this.scan = function() {
		return 'scan '.repeat(3);
	}
}

function MFP() {
	this.fax = function() {
		return 'fax '.repeat(3);
	}
}


var mfp = new MFP().extend(Printer, Scaner);

console.log(mfp.identme()); // I am device
console.log(mfp.print()); // print print print
console.log(mfp.scan()); // scan scan scan
console.log(mfp.fax()); // fax fax fax