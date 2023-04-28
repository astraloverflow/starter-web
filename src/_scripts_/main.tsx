import 'preact/debug';
import { h, Component, render } from 'preact';
import { signal } from '@preact/signals';
import sum from './sum';

const count = signal(Number(sessionStorage.getItem('count')) || 0);

function App() {
  const value = count.value;
  const increment = () => {
    count.value++;
    sessionStorage.setItem('count', String(count.value));
  };
  const decrement = () => {
    count.value--;
    sessionStorage.setItem('count', String(count.value));
  };
  const reset = () => {
    count.value = 0;
    sessionStorage.setItem('count', String(count.value));
  };

  return (
    <div class="p-4 bg-white rounded-lg shadow">
      <h1 class="text-5xl">Hello World</h1>
      <p class="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        <strong>Times button Has been clicked:</strong> {value}
      </p>
      <button class="button" onClick={increment}>
        Increment
      </button>
      &nbsp;
      <button class="button" onClick={decrement}>
        decrement
      </button>
      &nbsp;
      <button class="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

render(<App />, document.querySelector('#app'));
