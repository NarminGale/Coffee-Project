$('#send-button').on('click',function(){
    var name = $('#name-input').val();
    var number = $('#number-input').val();
    var email = $('#email-input').val();
    var message = $('#message-textarea').val();
    if(name.trim() == '' || number.trim() == '' || email.trim() == '' || message.trim() == '' ){
        correctCase();

        if(name.trim() == ''){
            wrongCase($('.name-form'));
        }
        if(number.trim() == ''){
            wrongCase($('.number-form'));
        }
        if(email.trim() == ''){
            wrongCase($('.email-form'));
        }
        if(message.trim() == ''){
            wrongCase($('.message-form'));
        }
    }else{
        correctCase();
    }
});

function wrongCase(elem) { 
    elem.css('border','2px solid #f00');
}

function correctCase() { 
    $('.form-element').css('border','1px solid #c7a17a');
}

<i class="fas fa-exclamation-triangle"></i>