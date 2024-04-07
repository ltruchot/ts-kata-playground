import { fizzBuzz } from './fizz-buzz/fizz-buzz';
import { helloWorld } from './hello-world/hello-world';

// run helloWorld function
helloWorld();

// run fizzBuzz function for the first 16 numbers
for (let i = 0; i < 16; i++) {
  console.log(fizzBuzz(i));
}
