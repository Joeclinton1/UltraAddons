function onExists(selector, callback, interval = 100){
    var checkExists = setInterval(function() {
        el = document.querySelector(selector)
        if (el != null) {
           clearInterval(checkExists);
           callback();
        }
    }, interval);
}