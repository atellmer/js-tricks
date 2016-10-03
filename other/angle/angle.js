//угол между стрелками аналоговых часов по времени
function getAngle(time, separator) {
	var h = parseInt(time.split(separator)[0]);
	var m = parseInt(time.split(separator)[1]);

	if (h >= 24 || h < 0 || m >= 60 || m < 0) {
		return false;
	}

	if (h >= 12) {
		h -= 12;
	}

	return Math.abs(m * 6 - (h * 30 + m * 0.5));
}

console.log('Угол: ' + getAngle('23:15', ':') + ' градусов');

