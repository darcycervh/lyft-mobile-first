$(document).ready(function() {
  // botón de registro
  var $signup = $('#signup');
  $signup.on('click', function() {
    window.location.href = '../views/signup.html';
  });
  // botón de inicio de sesión
  var $login = $('#login');
  $login.on('click', function() {
    window.location.href = '../views/login.html';
  });
});
