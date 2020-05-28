
// import functions
import { getClue as getClueFromCallback } from './01-callback-style.js';
import { getClue as getClueFromPromise } from './02-promise-style.js';
// import { getClue as getClueFromAsync } from './03-async-style.js';

// access buttons
const callbackButton = document.getElementById('use-callback');
const promiseButton = document.getElementById('use-promise');
const asyncButton = document.getElementById('use-async');

// access divs
let score = document.getElementById('score');
let question = document.getElementById('question');
let categoryTitle = document.getElementById('category-title');
let answer = document.getElementById('answer');
let value = document.getElementById('value');
let invalidCount = document.getElementById('invalid-count');

// other variables
let isvalid = 'valid';


// ***** run game using callbacks and XMLHTTPRequests *****

// add click event for request to callback button
callbackButton.addEventListener('click', event => {
    getClueFromCallback((err, clue) => {
        if (err !== null) {
            return console.error(err);
        } else {
            question.innerHTML = clue.question;
            categoryTitle.innerHTML = clue.category.title;
            answer.innerHTML = clue.answer;
            value.innerHTML = clue.value;
        }
    })
});


// ***** run game using promises and fetch *****

function htmlFromClue(clue) {
    question.innerHTML = clue.question;
    categoryTitle.innerHTML = clue.category.title;
    answer.innerHTML = clue.answer;
    value.innerHTML = clue.value;
}


if (clue.invalid_count && clue.invalid_count > 0) {
    isvalid = 'invalid';
}

validCount.innerHTML = isvalid;

promiseButton.addEventListener('click', event => {
    getClueFromPromise(clue)
        .then(htmlFromClue)
        .catch(err => console.error(err.message));
});
