var name = ''
var number = ''
var email = ''
var message = ''
$('#send-button').on('click', function () {
  name = $('#name-input').val()
  number = $('#number-input').val()
  email = $('#email-input').val()
  message = $('#message-textarea').val()
  if (
    name.trim() == '' ||
    number.trim() == '' ||
    email.trim() == '' ||
    message.trim() == ''
  ) {
    correctCase()
    check('#name-input', '.name-form')
    check('#number-input', '.number-form')
    check('#email-input', '.email-form')
    check('#message-textarea', '.message-form')
    $('<div class="warning-div"></div>').insertBefore('#send-button')
    $('.warning-div').append(
      `<p class="warning-p text-danger"><i class="me-2 fas fa-exclamation-triangle"></i>Пожалуйста, заполните все поля.</p>`
    )
  } else {
    correctCase()
  }
})
$('.common-input').keyup(function (e) {
  if ($(this).is('#name-input')) {
    check('#name-input', '.name-form')
  } else if ($(this).is('#number-input')) {
    check('#number-input', '.number-form')
  } else if ($(this).is('#email-input')) {
    check('#email-input', '.email-form')
  } else if ($(this).is('#message-textarea')) {
    check('#message-textarea', '.message-form')
  }
  if (
    $('#name-input').val().trim() != '' &&
    $('#number-input').val().trim() != '' &&
    $('#email-input').val().trim() != '' &&
    $('#message-textarea').val().trim() != ''
  ) {
    $('.warning-div').remove()
  }
})

function check(input, form) {
  var value = $(`${input}`).val()
  if (value.trim() == '') {
    $(`${form}`).css('border', '2px solid #f00')
    $(`${form} i`).css('color', '#f00')
  } else {
    $(`${form}`).css('border', '1px solid #c7a17a')
    $(`${form} i`).css('color', '#000')
  }
}

function correctCase() {
  $('.form-element').css('border', '1px solid #c7a17a')
  $('.form-element i').css('color', '#000')
  $('.warning-div').remove()
}

$('.about-icon').on('click', function () {
  var color = $(this).css('background-color')
  $('.about-us').css(
    'background',
    `linear-gradient(0deg, rgb(255, 255, 255), ${color} 15%, rgb(255, 255, 255))`
  )
  var id = $(this).data('id')
  $('.carousel-item').removeClass('active')
  $(`#item-${id}`).addClass('active')
})

$('.carousel').on('slid.bs.carousel', function () {
  console.log('ok');
  var element_id = $('.carousel-item.active').attr('id');
  console.log(element_id);
  })
