/* eslint-disable @typescript-eslint/no-floating-promises */
import assert from 'assert/strict';
import { describe, it, mock } from 'node:test';
import { helloWorld } from './hello-world';

describe('helloWorld function', () => {
  it('prints "Hello World!" to the console.', () => {
    const mockedConsole = mock.method(console, 'log'); // mock the console.log method

    helloWorld();
    const lastCall = mockedConsole.mock.calls[0]; // get the last call to console.log
    const [consoleLogArg1] = lastCall.arguments; // get the first argument of the last call to console.log, which is the string 'Hello World!'
    assert.deepEqual(consoleLogArg1, 'Hello World!');
  });
});
