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

        $('<div class="warning-div"></div>').insertBefore( "#send-button");
        $('.warning-div').append(`<p class="warning-p text-danger"><i class="me-2 fas fa-exclamation-triangle"></i>Пожалуйста, заполните все поля.</p>`);
        
    }else{
        correctCase();
    }
});

function wrongCase(elem) { 
    elem.css('border','2px solid #f00');
    $(`${elem} i`).css('color','#f00');
}

function correctCase() { 
    $('.form-element').css('border','1px solid #c7a17a');
    $('.form-element i').css('color','#000');
    $('.warning-div').remove();
}