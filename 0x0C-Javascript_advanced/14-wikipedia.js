function createElement(data) {
    const element = document.createElement("p");
    element.innerHTML = data;
    document.body.appendChild(element);
}

function queryWikipedia(callback) {
    const request = new XMLHttpRequest();
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
    request.open('GET', url);
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            const status = request.status;
            if (status === 0 || (status >= 200 && status < 400)) {
              callback(request.responseText);
            }
        }
    }
}

queryWikipedia(createElement);