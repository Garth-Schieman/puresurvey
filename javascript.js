// javascript for scroll to top function 
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
        $('#scroll').fadeIn('slow');
    } else {
        $('#scroll').fadeOut('slow');
    }
});
$('#scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});
});
