import { fizzBuzz } from './fizzbuzz/fizz-buzz';
import { helloWorld } from './helloworld/hello-world';

// run helloWorld function
helloWorld();

// run fizzBuzz function for the first 16 numbers
for (let i = 0; i < 16; i++) {
  console.log(fizzBuzz(i));
}
