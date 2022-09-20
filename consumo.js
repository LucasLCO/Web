function fazGet(url, valor) {
    url += "/" + valor;
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criaLinha(sensor_id) {
    let linha = document.createElement("p");
    let divValue = document.createTextNode(sensor_id.dataType);
    divValue.innerHTML = sensor_id.dataType;
    linha.appendChild(divValue);
    return linha
}

function main() {

    let data0 = JSON.parse(fazGet("https://my-json-server.typicode.com/LucasLCO/api-server/sensores", "0"));
    let data1 = JSON.parse(fazGet("https://my-json-server.typicode.com/LucasLCO/api-server/sensores", "1"));
    let data2 = JSON.parse(fazGet("https://my-json-server.typicode.com/LucasLCO/api-server/sensores", "2"));

    var sensor0 = document.getElementById("0");
    var sensor1 = document.getElementById("1");
    var sensor2 = document.getElementById("2");

    sensor0.append(criaLinha(data0))
    sensor1.append(criaLinha(data1))
    sensor2.append(criaLinha(data2))
}
main();