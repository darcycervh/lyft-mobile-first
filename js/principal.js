$(document).ready(function(){
    var $signup = $('#signup');
    $signup.on('click', function(){
        window.location.href='../views/signup.html';
    });
    var $login = $('#login');
    $login.on('click',function(){
        window.location.href='../views/login.html';
    });
});

/*
setTimeout(function(){ 
    window.location.href="views/principal.html"; 
    }, 5000)
*/