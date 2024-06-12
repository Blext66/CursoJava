$(document).ready(function() {
  //on ready
});


async function registrarUsuario() {
  let datos = {};
  datos.nombre = document.getElementsById('txtNombre').value;
  datos.apellido = document.getElementsById('txtApellido').value;
  datos.email = document.getElementsById('txtEmail').value;
  datos.password = document.getElementsById('txtPassword').value;

  let repetirPassword = document.getElementsById('txtRepetirPassword').value;

  if(repetirPassword != datos.password){
    alert('La contraseña que escribiste es diferente');
    return;
  }

  const request = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    }
    body: JSON.stringify(datos)
  });
  alert ("La cuenta fue creada con exito");
  window.location.href = 'login.html'

}
