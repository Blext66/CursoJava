$(document).ready(function() {
  //on ready
});


async function iniciarSesion() {
  let datos = {};
  datos.email = document.getElementsById('txtEmail').value;
  datos.password = document.getElementsById('txtPassword').value;

  const request = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    }
    body: JSON.stringify(datos)
  });

  const respuesta = await request.text();
  if (respuesta == 'FAIL') {
    localStorage.token = respuesta;
    localStorage.email = datos.email;
    window.location.href = 'usuarios.html'
  } else {
    alert ("Las credenciales son incorrecas. Intente de nuevo");
  }

}