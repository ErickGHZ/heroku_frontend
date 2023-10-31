function getForEmail() {
    var email = document.getElementById("email").value; 
    var request = new XMLHttpRequest();
    var url = "https://heroku-mysql-b9e2aa5c918c.herokuapp.com/contactos/" + encodeURIComponent(email);
    request.open('GET', url);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("response: " + response);
        console.log("json: " + json);
        console.log("status_code: " + request.status);

        if (json.length > 0) {
            var tbody_contactos = document.getElementById("tbody_contactos");
            var tr = document.createElement("tr");
            var td_email = document.createElement("td");
            var td_nombre = document.createElement("td");
            var td_telefono = document.createElement("td");

            td_email.innerHTML = json[0]["email"];
            td_nombre.innerHTML = json[0]["nombre"];
            td_telefono.innerHTML = json[0]["telefono"];

            tr.appendChild(td_email);
            tr.appendChild(td_nombre);
            tr.appendChild(td_telefono);

         
            tbody_contactos.innerHTML = '';

        
            tbody_contactos.appendChild(tr);
        } else {
        
            var tbody_contactos = document.getElementById("tbody_contactos");
            tbody_contactos.innerHTML = '<tr><td colspan="3">No se encontró ningún contacto con ese email.</td></tr>';
        }
    };
}
