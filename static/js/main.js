// //unsticky menu
// var sticky = false;
// $(window).scroll(function () {
//     var offsetTop = $('.site-footer').offset().top;
//     var scrollBottom = $(window).scrollTop() + $(window).height();

//     if (scrollBottom >= offsetTop) {
//         // $('#side-menu').css('position', 'absolute');
//         // $('#side-menu').css('bottom', '0');
//         sticky = false;
//     } else {
//         sticky = true;
//         $('#side-menu').css('position', 'fixed');
//         $('#side-menu').css('bottom', '');
//     }
    
//     // console.log(offsetTop, scrollBottom)
// });

// function setSideMenu() {
//     if (sticky === false) {
//         var bodyMargin = $('.site-main').outrWidth(true) - $('.site-main').outerWidth();
//         console.log(bodyMargin)
//         bodyMargin = bodyMargin / 2;
//         $('#side-menu').css('right', bodyMargin);
//     }
// }

// $(document).ready(function() {
//     var offsetTop = $('.site-footer').offset().top;
//     $(window).resize(function() {
//         setSideMenu();
//         $('#side-menu').css('height', offsetTop);
//     });
// })