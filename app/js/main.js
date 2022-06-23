jQuery(document).ready(function () {
  "use script";
  //burger btn
  var burgerBtn = $(".burger__btn");
  burgerBtn.on("click", function(event){
    event.preventDefault();
    $(this).toggleClass("burger__btn--open");
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
});