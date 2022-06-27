jQuery(document).ready(function () {
  "use script";
  //burger btn
  var burgerBtn = $(".burger__btn");
  burgerBtn.on("click", function(event){
    event.preventDefault();
    $(this).toggleClass("burger__btn--open");
    $(".main__menu").toggleClass("main__menu--open");
    if($(".main__menu").hasClass("main__menu--open")){
      $("body").addClass("has__menu--open");
    }else{
      $("body").removeClass("has__menu--open");
    }
  });
  //header search form
  var searchBtn = $("._searchBtn");
  var searchForm = $(".header__search");
  var closeSearchBtn = $("._closeSearch");
  searchBtn.on("click", function(){
    searchForm.addClass("header__search--show");
  });
  closeSearchBtn.on("click", function(){
    searchForm.removeClass("header__search--show");
  });
  //show catalog list
  var catBtn = $("._catalog__btn");
  catBtn.on("click", function(){
    $(this).toggleClass("rotate__el");
    $("._menuCat").toggleClass("menu__cat--open");
  });
  //intro slider
  var introSlider = $('#introSlider');
  introSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    cssEase: 'ease-in',
    zIndex: 2,
    dots: true,
    dotsClass: 'intro-dots',
    arrows: true,
    swipe: false,
    touchMove: false,
    focusOnSelect: false,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          swipe: true,
          touchMove: true,
        }
      }
    ]
  });
});