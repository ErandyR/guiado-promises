function getJson(url) {
    return new Promise(function (resolve, reject) {
        var ajax = new XMLHttpRequest();
        ajax.open("GET", url);
        ajax.send();
        ajax.onreadystatechange = function (data) {
            if (ajax.readyState == 4)
                resolve(JSON.parse(ajax.responseText));
        }
    })
}
getJson("data/earth-like-results.json")
.then(function(mensaje){return(getJson(mensaje.results[0]))})
.then(function(resultado){console.log(resultado)});
