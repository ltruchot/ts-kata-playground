/* eslint-disable @typescript-eslint/no-floating-promises */
import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { fizzBuzz } from './fizz-buzz';

// Define the tests
describe('fizzBuzz function', () => {
  it('returns "Fizz" for multiples of 3', async () => {
    assert.strictEqual(fizzBuzz(3), 'Fizz');
    assert.strictEqual(fizzBuzz(6), 'Fizz');
  });

  it('returns "Buzz" for multiples of 5', async () => {
    assert.strictEqual(fizzBuzz(5), 'Buzz');
    assert.strictEqual(fizzBuzz(10), 'Buzz');
  });

  it('returns "FizzBuzz" for multiples of both 3 and 5', async () => {
    assert.strictEqual(fizzBuzz(15), 'FizzBuzz');
    assert.strictEqual(fizzBuzz(30), 'FizzBuzz');
  });

  it('returns the number as a string for other numbers', async () => {
    assert.strictEqual(fizzBuzz(1), '1');
    assert.strictEqual(fizzBuzz(2), '2');
  });
});
