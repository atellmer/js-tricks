;(function() {
	'use strict';

function Observable() {
	this.fromEvent = function(selector, typeEvent) {
		var callbacks = [];
		return new Subscriber(document.querySelector(selector), typeEvent);
	
		function Subscriber(element, typeEvent) {
			var _element = element;
			var _typeEvent = typeEvent;
			this.subscribe = function(fn) {
				var filtered = callbacks.filter(function(callback) {
					return callback === fn;
				});
				if (filtered.length === 0) {
					callbacks.push(fn);
					_element.addEventListener(_typeEvent, fn);
				}
			}
		}
	}
	this.from = function(iterable) {
		var callbacks = [];
		return new Subscriber(iterable);
	
		function Subscriber(iterable) {
			this.subscribe = function(fn) {
				var filtered = callbacks.filter(function(callback) {
					return callback === fn;
				});
				if (filtered.length === 0) {
					callbacks.push(fn);
				}
				Array.prototype.forEach.call(iterable, function(v) {
					callbacks.forEach(function(callback) {
						callback(v);
					});
				});
			}
		}
	}
}

var arr = [];

new Observable()
	.fromEvent('#btn', 'click')
	.subscribe(function(e) {

		arr.push(Math.random() * 1000);

		new Observable()
			.from(arr)
			.subscribe(function(x) {
				console.log('x = ', x);
			});
		console.log('-'.repeat(10));
	});

})();