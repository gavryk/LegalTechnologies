$(function() {
    $('.burger_menu').on('click', function() {
        $(this).toggleClass('burger-active');
        $('.navigation').toggleClass('head_menu-active');
    });
    $('.search_button').on('click', function() {
        $('.search_panel').toggleClass('active_search_panel');
    })
})