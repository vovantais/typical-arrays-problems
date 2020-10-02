
exports.min = function min(array = 0) {
	if (array == 0 || array == '') {
		return 0;
	}
	let res = array[0];
	for (let i = 0; i < array.length; i++) {
		if (res > array[i]) {
			res = array[i];
		}
	}
	return res;
}

exports.max = function max(array = 0) {
	if (array == 0 || array == '') {
		return 0;
	}
	let res = array[0];
	for (let i = 0; i < array.length; i++) {
		if (res < array[i]) {
			res = array[i];
		}
	}
	return res;
}

exports.avg = function avg(array = 0) {
	if (array == 0 || array == '') {
		return 0;
	}
	let res = 0;
	array.forEach((item,) => {
		res += item;
	})
	return res / array.length;
}
