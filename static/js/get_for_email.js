function getForEmail(){
    var request = new XMLHttpRequest();
    var url = "https://heroku-mysql-b9e2aa5c918c.herokuapp.com/contactos?email=" + encodeURIComponent(email);
    request.open('GET', url);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("response: " + response);
        console.log("json: " + json);
        console.log("status_code: " + request.status);

        if (json.length > 0) {
            console.log("Email: " + json[0]["email"]);
            console.log("Nombre: " + json[0]["nombre"]);
            console.log("Telefono: " + json[0]["telefono"]);
        } else {
            console.log("No se encontró ningún contacto con ese email.");
        }
    };
}