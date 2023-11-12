function post() {
    var email = document.getElementById('email').value;
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;

    if (!email) {
        alert('Por favor, ingrese un correo electrónico.');
        return;
    }

    var request = new XMLHttpRequest();
    var url = 'https://heroku-mysql-b9e2aa5c918c.herokuapp.com/contactos';

    
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json');

    var requestBody = JSON.stringify({
        email: email,
        nombre: nombre,
        telefono: telefono
        });

    request.send(requestBody);

    request.onload = function () {
        if (request.status === 200) {
    
            document.getElementById('email').value = '';
            document.getElementById('nombre').value = '';
            document.getElementById('telefono').value = '';

        } else {
    
            console.error('Error submitting data:', request.status, request.statusText);
        }
    };
}
