$('.dlack').hide();
$('.actives').hide(1000);
$('.header_btn-link').click(function () {
    $('.dlack').show(1000);
    $('body').addClass('activeeee');
})
$('.kurs__block-first_remove-btn').click(function () {
    $('.dlack').hide(1000);
    $('body').removeClass('activeeee');
})

$('.kurs__block-second-btn').click(function () {
    $('.dlack_1').show();
    $('.dlack').hide();
    
})

// 
$('.dlack_1').hide();
$('.kurs__block-second-btn_1').click(function () {
    $('.dlack_1').hide();
    $('body').removeClass('actives');
})
// 
$('.section_slide_img-btn').click(function () {
    $('.dlack').show(1000);
    $('body').addClass('actives');
})

// 
$('.header__menu-btn').click(function () {
  
    $('.header__menu-ul').toggleClass('acttive');

})

$(function() {
    let link = $('nav ul a');
    link.on('click', function(e) {
        e.preventDefault();
        link.removeClass('active');
        
        
        $('html, body').animate({scrollTop: target.offset().top - 70}, 200)
    })
    

    
    $(window).scroll(function() {
        
        
        if($(this).scrollTop() > 500){
            $('.top').addClass('activ-top');
            $('.box2').addClass('activ-top2');
        }
    
        else{
            $('.top').removeClass('activ-top');
            $('.box2').removeClass('activ-top2');
        }
        
      
        
        let scroll = $(window).scrollTop();
        link.each(function() {
            let selector = $(this).attr('href');
            let target = $(selector);
            
            if(scroll >= target.offset().top - 200){
                link.removeClass('active');
                $(this).addClass('active');
            }
        })
        
    })
    
    $('.top').click(function() {
        $('html, body').animate({scrollTop:0}, 500);
    })
    
    
})