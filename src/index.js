module.exports = function reverse (n) {
    const abs = Math.abs(n);
    const string = abs.toString();
    const reversed = string.split("").reverse().join("")
	return reversed;
};

