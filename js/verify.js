$(document).ready(function(){
    $('#span').hide();
    var $resend = $('#resend');
    $resend.on('click',function(){
        window.location.href='../views/signup.html';
    });
    var $buttonNext = $('#buttonNext');
    
    var $codeVerify1 = $('#codeInput1');
    var $codeVerify2 = $('#codeInput2');
    var $codeVerify3 = $('#codeInput3');

    $buttonNext.on('click', function(){
        if($labGroup.val() == ''){
            $('#span').fadeIn(); 
        }else{
            $('#span').hide(); 
        }
    });
    var $labGroup = $('.lab-group');
    $labGroup.on('keydown',function(){
        for(var i=0;i<$labGroup.val();i++){
            $buttonNext.addClass('button-next');
            $buttonNext.on('click',function(){
                window.location.href='../views/email.html';
            });
        }
        if($labGroup.val() != ''){
            $('#span').hide();
        }
    });
});
/**
     * $inputNumber.on('keydown', function(event){
        if($inputNumber.val() != ''){
           $('#msn').hide();   
        }
     */
//$('.dropdown-toggle').dropdown();
    /*var $buttonPrev = $('#buttonPrev');
    $buttonPrev.on('click',function(){
        window.location.href='../views/signup.html';
    });*/
    /*var $buttonNext = $('#buttonNext');
    $buttonNext.on('click',function(){
        window.location.href='../views/email.html';
    });*/

/**
 *  $code1.on('keydown',function(){
            if($codeVerify1 != $code1){
                alert('oye!');
            }
        });
        $code2.on('keydown',function(){
            if($codeVerify2 != $code2){
                alert('hey!');
            }
        });
        $code3.on('keydown',function(){
            if($codeVerify3 != $code3){
                alert('no!');
            }
        });
 */
 /*
    $codeVerify1.on('keydown', function(){
        if($codeVerify1 != $code1){
            alert('noo');
        }
    });

    $buttonNext.on('click',function(){*/
        /*var $codeVerify1 = ('#codeInput1');
        var $codeVerify2 = ('#codeInput2');
        var $codeVerify3 = ('#codeInput3');*/
        
       /*if($codeVerify1 != $code1 || $codeVerify2 != $code2 || $codeVerify3 != $code3){
           $buttonNext.prop('disabled',true);
       }else{
            $buttonNext.prop('disabled',false);
           window.location.href='../views/email.html';
       }
    });*/