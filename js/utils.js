function onExists(selector, callback, interval = 100){
    var checkExists = setInterval(function() {
        el = document.querySelector(selector)
        if (el != null) {
            console.log("success: element found")
            clearInterval(checkExists);
            callback();
        }
    }, interval);
}

function onNotExists(selector, callback, interval = 100){
    var checkNotExists = setInterval(function() {
        el = document.querySelector(selector)
        console.log(el)
        if (el == null) {
            console.log("success: element not found")
            clearInterval(checkNotExists);
            callback();
        }
    }, interval);
}