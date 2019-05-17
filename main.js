$(document).ready(function(){
  $('#performance-content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true
  });

  $('#company-button').click(function() {
    $('#shop, #self, #company-button').addClass('none');
    $('#company').addClass('padding');
    $('#company-right, #backbutton').removeClass('none');
  });
  $('#shop-button').click(function() {
    $('#company, #self, #shop-button').addClass('none');
    $('#shop').addClass('padding');
    $('#shop-right, #backbutton').removeClass('none');
  });
  $('#self-button').click(function() {
    $('#company, #shop, #self-button').addClass('none');
    $('#self').addClass('padding');
    $('#self-right, #backbutton').removeClass('none');
  });
  $('#backbutton').click(function() {
    $('#backbutton, .offer-right').addClass('none');
    $('.offer-box, .offer-button').removeClass('none');
    $('.offer-box').removeClass('padding');
  });

  $(window).on('scroll',function(){
    $(".scroll-slide").each(function(){
      const objPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowH = $(window).height();
      if(scroll > objPos - windowH/2){
        $(this).css({
          'opacity': '1',
          'transform': 'translate(0, 0)'
        });
      }
    });
  });
});
