$(document).ready(function() {
  $('#msn').hide();
  var $buttonPrev = $('#buttonPrev');
  $buttonPrev.on('click', function() {
    window.location.href = '../views/principal.html';
  });
  var $btnSendCode = $('#send-code');
  var $buttonNext = $('#buttonNext'); 
  var $inputNumber = $('#inputNumber');
  // $buttonNext.prop('disabled',true);
  $buttonNext.on('click', function() {
    if ($inputNumber.val() === '') {
      $('#msn').show(); 
    }  
  });
  $inputNumber.on('keydown', function(event) {
    if ($inputNumber.val() !== '') {
      $('#msn').hide();   
    }
    if ($inputNumber.val().length > 8) {
      var $code1 = Math.floor((Math.random() * 10));
      var $code2 = Math.floor((Math.random() * 10));
      var $code3 = Math.floor((Math.random() * 10));
      alert('tu código es: LAB-' + $code1 + $code2 + $code3);
      $buttonNext.addClass('button-next');
      $buttonNext.on('click', function() {
        window.location.href = '../views/verify.html';
      });
    } else {
      $buttonNext.css('background-color', 'silver');
    }   
  });
  /* var $code = $('#random');
    $code.on('load',function(){
        Math.floor((Math.random() * 10) + 1);
    });*/
});

/* var $buttonNext = $('#buttonNext');
    $buttonNext.on('click',function(){
        window.location.href='../views/verify.html';
    });*/
/* if($inputNumber.val()==="" || $inputNumber.val()===String){
       $buttonNext.prop('disabled',true); 
    }else if($inputNumber.val()===Number && $inputNumber.val().lenght > 9 ){
        $buttonNext.prop('disabled',false);
        $buttonNext.css('background-color','purple');
        $buttonNext.on('click',function(){
        window.location.href='../views/verify.html';
        });
    }*/