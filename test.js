var test = require('tape')
var factorialln = require('./')
var factorial = require('factorial')
var range = require('range')

test('log factorial test', function (t) {

  var nums = range(1,100)

  t.plan(nums.length)
  
  nums.forEach(
    function(n) {
      var fln = factorialln(n)
      var fn = Math.log(factorial(n))
      console.log('log('+n+'!) =', fln, fn, 'diff:', fln - fn)
      t.ok(factorialln(n) - Math.log(factorial(n)) < 1e-13)
    })

})
