
export function getClue(callback) {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== XMLHttpRequest.DONE) return;
        if (request.status < 200 || request.status >= 300) {
            callback(request.status);
        } else {
            const data = JSON.parse(request.responseText)
            callback(null, data);
        };

    })

    request.open('GET', 'https://jservice.xyz/api/random-clue');
    request.send();
}



