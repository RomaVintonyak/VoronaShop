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
    $(this).toggleClass("roate__el");
    $(".menu__cat").toggleClass("menu__cat--open");
  });
});