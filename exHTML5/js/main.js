// var menu = doucument.querySelector('.menu')표준방식;
// var items = menu.querySelectorAll('.menu-item');
var menu = $('.menu');
var items = $('.menu-item')
// 한번에 동그라미 적용한다
var icons = $('.submenu a')
icons.attr('class', 'icon-dot-circled');

items.on('click keyup focus', function(e){
    
    if(e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13) || e.type === 'focus') {
    items.removeClass('menu-act');
    $(this).addClass('menu-act');
    }
});