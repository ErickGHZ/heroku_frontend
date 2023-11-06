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

        if (response != "null") {
            var tbody_contactos = document.getElementById("tbody_contactos");
            var tr = document.createElement("tr");
            var td_email = document.createElement("td");
            var td_nombre = document.createElement("td");
            var td_telefono = document.createElement("td");

            td_email.innerHTML = json["email"];
            td_nombre.innerHTML = json["nombre"];
            td_telefono.innerHTML = json["telefono"];
            

            tr.appendChild(td_email);
            tr.appendChild(td_nombre);
            tr.appendChild(td_telefono);

         
            tbody_contactos.innerHTML = '';

        
            tbody_contactos.appendChild(tr);
        } else {
            var tbody_contactos = document.getElementById("tbody_contactos");
            var tr = document.createElement("tr");
            var td_error = document.createElement("td");
        
            // Utiliza un solo td con colspan="3" para que el mensaje se extienda a las tres celdas
            td_error.setAttribute("colspan", "3");
            td_error.textContent = 'No se encontró ningún contacto con ese email.';
        
            tr.appendChild(td_error);
        
            tbody_contactos.innerHTML = '';
            tbody_contactos.appendChild(tr);
        }
        
    };
}
