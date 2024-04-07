/**
 * Generates a string based on the classic FizzBuzz game.
 * For a given number, the function returns:
 * - "Fizz" if the number is divisible by 3,
 * - "Buzz" if the number is divisible by 5,
 * - "FizzBuzz" if the number is divisible by both 3 and 5,
 * - The number itself as a string if none of the above conditions are met.
 *
 * @param {number} num - The number to test for the FizzBuzz game.
 * @returns {string} The string corresponding to the FizzBuzz result for the given number.
 */
export function fizzBuzz (num: number): string {
  let output = '';

  // Check for multiples of 3
  if (num % 3 === 0) {
    output += 'Fizz';
  }

  // Check for multiples of 5
  if (num % 5 === 0) {
    output += 'Buzz';
  }

  // If not a multiple of 3 or 5, use the number itself
  if (output === '') {
    output = num.toString();
  }

  return output;
}
