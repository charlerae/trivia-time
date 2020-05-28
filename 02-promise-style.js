
function getClue () {
    fetch("https://jservice.xyz/api/random-clue")
    .then((response) => {
        if (ok === false) {
            throw new Error
        }
    })
}
