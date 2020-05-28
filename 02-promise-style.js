

export function getClue () {
    fetch("https://jservice.xyz/api/random-clue")
    .then((response) => {
        if (!response.ok) {
            if (!response.ok) throw new Error(response.status);
        } let clue = response.json();
    });
}
