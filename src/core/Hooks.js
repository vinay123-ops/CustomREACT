import { rerender } from "../core/render.js";

let state = [];  // Stores component states
let stateIndex = 0; // Tracks which state to use

function useState(initialValue) {
  const currentIndex = stateIndex; // Capture the current index

  // Initialize state if it's not set
  if (state[currentIndex] === undefined) {
    state[currentIndex] = initialValue;
  }

  // Function to update state and re-render
  function setState(newValue) {
    state[currentIndex] = newValue;
    stateIndex = 0; // Reset index before re-rendering
    rerender();
  }

  stateIndex++; // Move to the next state slot
  return [state[currentIndex], setState];
}