function subtract(numbers) {
  return numbers.reduce(function (a, b) {
    return a - b;
  });
}

module.exports = subtract;
