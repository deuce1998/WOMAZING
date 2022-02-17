// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     autoplay: {
//       delay: 5000,
//     },
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  

//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

var swiper = new Swiper(".swiper", {
  direction: 'horizontal',
    autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});

//Липкая шапка
$(function() {
  let header = $('.header');

  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('head_fixed');
     $('.title').css('padding-top',header.outerHeight(true));
    } else {
     header.removeClass('head_fixed');
     $('.title').css('padding-top','0px');
    }
  });
 });

 $(".call").on("click", function(){
  $(".call-back-wrapper").toggleClass("d-none");
  $(".call-back-overlay").toggleClass("d-none");
 });
 $(".call-back-overlay").on("click", function(){
  $(".call-back-wrapper").toggleClass("d-none");
  $(".call-back-overlay").toggleClass("d-none");
 });

//  $(".call-back__btn").on("click", function(){

//  });
 $(".popap-registration__btn").on("click", function(){
  $(".popap-registration-wrapper").toggleClass("d-none");
  $(".popap-registration-overlay").toggleClass("d-none");
 });

 $(".popap-registration-overlay").on("click", function(){
  $(".popap-registration-wrapper").toggleClass("d-none");
  $(".popap-registration-overlay").toggleClass("d-none");
 });

 //Валидация
  $.validator.addMethod(
      "regex",
      function(value, element, regexp) {
          var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
      },
      "Please check your input."
  );

$(function() {
  $("form[name='registration']").validate({
    rules: {
      telephoneNumber: {
              required: true,
              digits : true,
              minlenght: 10,
              maxlength: 11,
              regex : "{0-9}+"
          },
          name: {
              required: true,
              regex: '[А-Я][а-я]'
          },
          email: {
              required: true,
              email: true
          }
    },
 messages: {
  telephoneNumber: {
  required: 'Поле обязательно для заполнения',
  regex: 'Телефон может содержать символы + - ()'
},
  name: {
    required: 'Поле обязательно для заполнения',
},
  email: {
    required: 'Поле обязательно для заполнения',
    email: 'Неверный формат E-mail'
}
 },
  submitHandler: function(form) {
    //form.submit();
    
    //popapShow();
    //e.preventDefault();
  }
  });
});


jQuery.extend(jQuery.validator.messages, {
  digits: "Пожалуйста используйте только цифры.",
});

popapShow = function(){
  $(".call-back-wrapper").toggleClass("d-none");
  $(".call-back-overlay").toggleClass("d-none");
  $(".popap-registration-wrapper").toggleClass("d-none");
  $(".popap-registration-overlay").toggleClass("d-none");
}
$("form").submit(function() {
  popapShow();
  return false; 
});