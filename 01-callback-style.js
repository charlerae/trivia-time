
export function getClue(callback) {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== XMLHttpRequest.DONE) return;
        if (request.status < 200 || request.status >= 300) {
            return;
        } else {
            return callback(request.status);
        };

        const data = JSON.parse(request.responseText);
        console.log(data);

        callback(null, data);
    })

    request.open('GET', 'https://jservice.xyz/api/random-clue');
    request.send();
}




// exports = getClue();




// const xmlReq = new XMLHttpRequest();
// xmlReq.addEventListener('readystatechange', () => {
//     if (xmlReq.readyState !== XMLHttpRequest.DONE) return;
//     if (xmlReq.status < 200 || xmlReq.status >= 300) return;

//     const data = JSON.parse(xmlReq.responseText);
//     console.log(data);
// });

// xmlReq.open('GET', 'https://api.weather.gov/points/39.7456,-97.0892');
// xmlReq.send();
