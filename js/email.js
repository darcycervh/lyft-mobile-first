$(document).ready(function() {
  // $('.dropdown-toggle').dropdown();
  var $spanDigits = $('#span-digits').hide();
  var $spanUppercase = $('#span-uppercase').hide();
  var $buttonPrev = $('#buttonPrev');
  var $buttonNext = $('#buttonNext');
  $buttonPrev.on('click', function() {
    window.location.href = '../views/verify.html';
  });
  /*
    $buttonNext.on('click',function(){
        window.location.href='../views/finish.html';
    });*/
  var $firstName = $('#first-name');
  var $lastName = $('#last-name');
  var $email = $('#email');
  var $password = $('#password');
  var $checkbox = $('#checkbox');

  var firstNameOk = false;
  var lastNameOk = false;
  var correctEmail = false;
  var correctPassword = false;
  var correctCheckbox = false;
    
  $firstName.on('keydown', function() {
    if ($firstName.val() !== '') {
      firstLastNameOk = true;
      activeButtonNext();
    }
  });
  $lastName.on('keydown', function() {
    if ($lastName.val() !== '') {
      lastNameOk = true;
      activeButtonNext();
    }
  });

  // var $exp = '^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$';
  $email.on('input', function(event) {
    // console.log(event.target.value);
    var $exp = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
        
    // console.log($exp.test($(this).val()));
    if ($exp.test($(this).val())) {
      console.log('es valido');
      correctEmail = true;
      activeButtonNext();
    } else {
      console.log('ingresa correo valido');
    }
  });
    
  $password.on('input', function(event) {
    var $expPassword = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if ($(this).val().length > 8) {
      $('#span-digits').hide();
      correctPassword = true;
      activeButtonNext();
    } else if ($(this).val().length > 6) {
      $('#span-digits').show();
    }
  });
    
  $checkbox.on('click', function(event) {
    // console.log(event.target.checked);
    if (event.target.checked) {
      correctCheckbox = true;
      activeButtonNext();
    }
  });
  function activeButtonNext() {
    if (correctEmail == true && correctPassword == true && correctCheckbox == true && $firstName.val() && $lastName.val()) {
      $buttonNext.addClass('button-next');
      $buttonNext.on('click', function() {
        window.location.href = '../views/finish.html';
      });
    }
  }
});