// $( ".btn-more" ).click(function() {
//     $(".text-2").toggleClass("more-text");
//     if($(".btn-more").text() === "Leer mÃ¡s") {
//         $(".btn-more").text() = "Leer menos";
//     } else {
//         $(".btn-more").text() = "Leer mÃ¡s";
//     }
//   });


$(document).ready(function(){
  $("input").on("input", function () {
    this.value.length > this.maxLength &&
      (this.value = this.value.slice(0, this.maxLength));
  });
  
  $('#nombre').keypress(function(){
      lettersOnly();
  });
  
  function lettersOnly(e) 
  {
      var charCode = e.keyCode;
      if ((charCode > 64 && charCode < 91) || charCode == 32 || (charCode > 96 && charCode < 123) || charCode == 8)
          return true;
      else
          return false;
  
  }
});$('.m-text-slide').slick({
  slidesToShow: 1,
  infinite: false,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
  responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: false,
          slidesToShow: 1,  
          centerPadding: '0px',
          }
      },
      {
        breakpoint: 420,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 1,
          centerMode: false,
          }
      }
  ]
});

$('.m-gallery-imgs').slick({
  slidesToShow: 2,
  infinite: false,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  centerMode: false,
  centerPadding: '0px',
  responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,  
          centerPadding: '0px',
          }
      },
      {
        breakpoint: 420,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 1,
          centerMode: false,
          }
      }
  ]
});

$(".mobile-menu").click(function(){
  $(".mob-menu").toggleClass("active");
});
$(".main-menu nav ul li a").hover(function(){
  $(this).find(".line").toggleClass("active");
})
$(".btn-more").click(function(e){
$(this).parent().prev().find('.more').fadeToggle();
$(this).parent().prev().find('.dots').toggle();
$(this).toggleClass('active')
if($(this).hasClass('active')){
$(this).text('Leer menos');
}
else{
$(this).text('Leer mÃ¡s');
}
});
  
$('#numero_documento').maxlength({max: 8, showFeedback: false});
$('#nombre').maxlength({max: 50, showFeedback: false});
$('#telefono').maxlength({max: 9, showFeedback: false});
$('#lugar').maxlength({max: 50, showFeedback: false});
$('#requerimientos').maxlength({max: 200, showFeedback: false});

$("#tipo_documento").change(function(){
 $("#divInputTipDoc").html("");
 $("#divInputTipDoc").html('<input type="number" class="form-control" placeholder="DNI O RUC" style="background-color: #F4F7FB; color:#373737; font-weight: bold;" id="numero_documento" name="numero_documento" required>' +
                             '<label for="floatingInput" style="color: #B2B1B9; font-weight: bold;" required>DNI O RUC</label>');
 if( $(this).val() == "DNI" )
 {
     $('#numero_documento').maxlength({max: 8, showFeedback: false});
 }
 else 
 {
     $('#numero_documento').maxlength({max: 11, showFeedback: false});
 }
});

function closePopup(){
$('.popup').fadeOut();
}

$('form').submit(function(event){
  event.preventDefault()
  
  _name = $(this).find('[name="nombre"]')
  _phone = $(this).find('[name="telefono"]')
  _email = $(this).find('[name="email"]')
  _message = $(this).find('[name="message"]')
  if (!phonevalidator(_phone.val())){
      _phone.addClass('border-warning')
  } else if (!ValidateEmail(_email.val())){
    _email.addClass('border-warning')
} else if (!itsempyornull(_message.val())){
  _message.addClass('border-warning')
} else if (!itsempyornull(_name.val())){
  _name.addClass('border-warning')
} else {
      grecaptcha.execute();
  }
})

function phonevalidator(value){
  if (value='' || value.length < 9 || value ===' '){
      return false
  } else{
      return true
  }
}
function ValidateEmail(value) {
  return !!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}
function itsempyornull(val) {
  return "" === val || " " === val || null === val;
}

