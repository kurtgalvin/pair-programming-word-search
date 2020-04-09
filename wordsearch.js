const transpose = function(matrix) { // matrix is an array of arrays
  let newMatrix = [];
  for (let col = 0; col < matrix[0].length; col++) { // for each column in first row, adds new row to newMatrix
    newMatrix.push([]);
  }
  for (let row = 0; row < matrix.length; row++) { // this code uses 2 for loops to first iterate through the outer array in the input matrix and then inside the inner arrays, pushing the values to our new matrix
    for (let col = 0; col < matrix[row].length; col++) {
    newMatrix[col].push(matrix[row][col]);
    }
  }
  return newMatrix;
};

// we took our transpose function from a previous pair programming activity in order to transform the verticalJoin as necessary

const containsString = function(arrStrings, word) { // keeps our code DRY by being passed an array and the word
  for (const row of arrStrings) {
    if (row.includes(word)) {
        return true
    }
  }
  return false
}

const wordSearch = (letters, word) => { // letters is a 2D matrix, word is the word we are searching for
  const horizontalJoin = letters.map(ls => ls.join('')) // horizontalJoin is an array consisting of each array inside the letters matrix that has been joined into a string
  if (containsString(horizontalJoin, word)) { // callback on containsString for horizontalJoin
    return true
  }
  const verticalJoin = transpose(letters).map(ls => ls.join('')) // callback on containsString for verticalJoin
  if (containsString(verticalJoin, word)) {
    return true
  }

  return false
}

// pair programming activity, between @Purple-Towel and @kurtgalvin for Lighthouse Labs

module.exports = wordSearch