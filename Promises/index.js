function get(url, callback, errorCallback) {
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

get("data.txt", function(data){
    console.log("Success!", data);
}, function(err){
    console.log("Error", err);
});