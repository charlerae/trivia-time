
// require function
import { getClue as getClueFromCallback } from './01-callback-style.js';
// access button
const cbButton = document.getElementById('use-callback');
// access divs
let score = document.getElementById('score');

// add click event
cbButton.addEventListener('click', event => {
    getClueFromCallback((error, clue) => {
        if (error !== null) {
            console.error(error);
        } else {
            document.getElementById('question').innerHTML = data.question;
            document.getElementById('category-title').innerHTML = data.category.title;
            document.getElementById('answer').innerHTML = data.answer;
            document.getElementById('value').innerHTML = data.value;
        }
    })
})
