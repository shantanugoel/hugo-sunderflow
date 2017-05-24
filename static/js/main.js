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

function resizeSearch() {
  var searchIconHeight = $('#input-search-icon-container').height();
  $('#input-search-icon-container, #input-close-icon-container').css({
    'width': searchIconHeight + 'px'
  });
  $('#input-search').css('width', 'calc(100% - ' + (searchIconHeight * 2) + 'px)');
}
function toggleSearchInput(e) {
  e.preventDefault();
  var searchContainer = $('#search-container');
  if(searchContainer.hasClass('search-hidden')) {
    searchContainer.removeClass('search-hidden');
    searchContainer.addClass('search-visible');
  }
  else {
    searchContainer.removeClass('search-visible');
    searchContainer.addClass('search-hidden');
  }
}
function switchNavbar() {
  if($(document).scrollTop() !== 0) {
    $('#home-navbar').addClass('navbar-white');
    $('#home-navbar').removeClass('navbar-dark');
  }
  else {
    $('#home-navbar').removeClass('navbar-white');
    $('#home-navbar').addClass('navbar-dark');
  }
}
function doGoogleSearch(e) {
  if(e.which !== 13) return;
  var searchText = $('#input-search').val();
  if(!searchText) return;
  var preparedUrl = 'https://google.com'; // change stuff here
  window.location.href = preparedUrl;
}

$(document).ready(function() {
  resizeSearch();
  $(window).resize(resizeSearch);
  $(document).scroll(switchNavbar);
  $('#search-toggle, #search-toggle-phone, #input-close-icon').click(toggleSearchInput);
  $('#input-search').keypress(doGoogleSearch);
  
  if (document.location.pathname !== '/') {
    // Don't activate autohiding of bar on the landing page
    $(".navbar-fixed-top").autoHidingNavbar({});
  }
});