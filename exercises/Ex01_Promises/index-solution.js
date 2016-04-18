function requestEs5(url, callback, errorCallback) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function () {
        if (req.status == 200) {
            // Resolve the promise with the response text
            callback(req.response);
        }
        else {
            // Otherwise reject with the status text
            // which will hopefully be a meaningful error
            errorCallback(Error(req.statusText));
        }
    };

    // Handle network errors
    req.onerror = function () {
        errorCallback(Error("Network Error"));
    };

    req.send();
}

requestEs5("data.txt", function (data) {
    console.log("ES5 Success!", data);
}, function (err) {
    console.log("ES5 Error", err);
});


function requestEs6(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };

        req.send();
    })
}

requestEs6("data.txt")
    .then(function (data) {
        console.log("ES6 Success!", data);
    })
    .catch(function (err) {
        console.log("ES6 Error", err);
    });
