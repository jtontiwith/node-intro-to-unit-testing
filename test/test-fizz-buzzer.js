//import chai and delcare its expect variable
const expect = require('chai').expect;

//import the function I am going to test
const fizzBuzzer = require('../fizzBuzzer');

//here comes the unit test

describe('fizzBuzzer', function() {
  //test the normal case 
  it('should return the num if not divisible by 3, 5, or 15 with no remainder, otherwise it\'ll return fizz-buzz if num is divisible by 15 with no remainder, buzz if num is divisible by 5 with no remainder, and fizz if divisible by 3 with no remainder', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 5, expected: 'buzz'},
      {num: 3, expected: 'fizz'},
      {num: 2, expected: 2}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  })    

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      'z',
      '1',
      false
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });


});