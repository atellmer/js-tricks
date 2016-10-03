var arr = [0, 2, 8, 4, 3];

Array.prototype.getMax = function() {
  return Math.max.apply(null, this);
};

Array.prototype.getMin = function() {
  return Math.min.apply(null, this);
};

console.log(arr.getMax()); //8
console.log(arr.getMin()); //0
