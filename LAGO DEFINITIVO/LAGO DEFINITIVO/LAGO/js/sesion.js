function verificar() {
  const usuario = document.getElementById('usuario').value.trim();
  const contrasena = document.getElementById('contrasena').value.trim();

  const usuarioValido = "admin";
  const contrasenaValida = "12345";

  if (!usuario || !contrasena) {
    alert("Por favor, completa ambos campos.");
    return;
  }

  if (usuario === usuarioValido && contrasena === contrasenaValida) {
    window.location.href = "../html/expoAdmin.html";
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}
