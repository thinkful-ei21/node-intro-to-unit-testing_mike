// import chai, expect
const expect = require('chai').expect;

// import adder
const fizzbuzzer = require('../fizzBuzzer');

// unit test for fizzbuzz
describe('fizzBuzz', () => {

  // test normal cases
  it('should return fizz', () => {
    const normalCases = [
      {num: 3 , expected: 'fizz'},
      {num: 9, expected: 'fizz' },
      {num: 27, expected: 'fizz'}
    ];
    // for each input of number
    // produce the expected value
    normalCases.forEach( input => {
      const result = fizzbuzzer(input.num);
      expect(result).to.equal(input.expected);
    });
  });

  it('should return buzz', () => {
    const normalCases = [
      {num: 5 , expected: 'buzz'},
      {num: 25, expected: 'buzz' },
      {num: 40, expected: 'buzz'}
    ];
    // for each input of number
    // produce the expected value
    normalCases.forEach( input => {
      const result = fizzbuzzer(input.num);
      expect(result).to.equal(input.expected);
    });
  });

  it('should return fizz-buzz', () => {
    const normalCases = [
      {num: 60, expected: 'fizz-buzz'},
      {num: 45, expected: 'fizz-buzz' },
      {num: 15, expected: 'fizz-buzz'}
    ];
    // for each input of number
    // produce the expected value
    normalCases.forEach( input => {
      const result = fizzbuzzer(input.num);
      expect(result).to.equal(input.expected);
    });
  });  

  // test cases for failing
  it('should produce failed test if arg is not a number', () => {
    const badInput = [
      'this', null, undefined
    ];
    // prove that an error is raised for bad inputs
    badInput.forEach( input => {
      expect( () => {
        fizzbuzzer(input);
      }).to.throw(Error);
    });
  });
});