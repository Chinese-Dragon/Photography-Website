$(document).ready(function () {
    $('form[name="login"]').submit(function (event) {
        var password=$("#password").val();
        
        if(password.length<6){
            event.preventDefault();
        }
    });
    
    $('form[name="signup"]').submit(function (event) {
        var password=$("#password").val();
        
        if(password.length<6){
            event.preventDefault();
        }
    });

});