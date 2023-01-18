
// You should implement your task here.
module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];

  return matrix.map((item, index) => Object.values(index % 2 === 0 ? item : item.reverse())).flat();
}
