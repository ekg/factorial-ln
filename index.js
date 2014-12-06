var gamma = require('gamma')

function factorialln(n) {
  if (n < 0) {
    return -1.0
  } else if (n === 0 || n === 1) {
    // prevents rounding errors due to gamma approximation
    return 0.0
  } else {
    return gamma.log(n + 1.0)
  }  
}

module.exports = factorialln
