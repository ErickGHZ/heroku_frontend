function getAll(){
    var request = new XMLHttpRequest;
    request.open('GET',"https://heroku-mysql-b9e2aa5c918c.herokuapp.com/contactos");
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("response: " + response);
        console.log("json: " + json);
        console.log("status_code: " + request.status);

        console.log("Email: " + json[0]["email"]);
        console.log("Nombre: " + json[0]["nombre"]);
        console.log("Telefono: " + json[0]["telefono"]);

        const tbody_contactos = document.getElementById("tbody_contactos");
    
        for (let i = 0; i < json.length; i++) {
            var tr = document.createElement("tr");
            var td_email = document.createElement("td");
            var td_nombre = document.createElement("td");
            var td_telefono = document.createElement("td");

            td_email.innerHTML = json[i]["email"];
            td_nombre.innerHTML = json[i]["nombre"];
            td_telefono.innerHTML = json[i]["telefono"];

            tr.appendChild(td_email);
            tr.appendChild(td_nombre);
            tr.appendChild(td_telefono);

            tbody_contactos.appendChild(tr);
        }

    };

 
};