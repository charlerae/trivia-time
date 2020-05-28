
// require function
import { getClue as getClueFromCallback } from './01-callback-style.js';

// access button
const cbButton = document.getElementById('use-callback');

// access divs
let score = document.getElementById('score');

// add click event for request to callback button
cbButton.addEventListener('click', event => {
    getClueFromCallback((err, clue) => {
        if (err !== null) {
            return console.error(err);
        } else {
            document.getElementById('question').innerHTML = clue.question;
            document.getElementById('category-title').innerHTML = clue.category.title;
            document.getElementById('answer').innerHTML = clue.answer;
            document.getElementById('value').innerHTML = clue.value;
        }
    })
})
