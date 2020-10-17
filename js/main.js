$(document).ready(function () {

  $(".more").click(function () {
    window.location.href = "producto.html";
  });

  let menu = $("ul.menu");

  let hamburger = $(".hamburger");

  hamburger.click(function () {
    hamburger.toggleClass("is-active");
    
    if (menu.attr('class') == "menu") {
      menu.removeClass("menu").addClass("menu-responsive");
    } else {
      menu.removeClass("menu-responsive").addClass("menu");
    }

  });

  $("svg").click(function () {

    let barril = $("#Barril1");
    barril.css("transition", "all 300ms");
    barril.css("transform", "translateY(-20px)");

    setTimeout(function () {
      location.href = "index.html";
    }, 250);
  });

});