$(".js-clearFilters").click(function(e) {
    e.preventDefault();
    $(".filters input[type=checkbox]:checked").trigger("click");
  });
  
  $(".js-applyFilters").click(function(e) {
    e.preventDefault();
    $(".js-toggle").trigger("click");
  });
  
  $( ".js-toggle" ).click(function() {
    $(".tooltip").hide();
    $(this).toggleClass("toggle-open");
    $(".filters").toggleClass("filters-open");
    ($(".tooltip").text() === "Close filters") ? $(".tooltip").text("View filters") : $(".tooltip").text("Close filters");
    ($(".tooltip").text() === "View filters") ? $(".tooltip").text("View filters") : $(".tooltip").text("Close filters");
  });
  
  $(".js-toggle").mousemove(function(event) { 
    var left = event.pageX - $(this).offset().left + 12;
    var top = event.pageY - $(this).offset().top + 12;
    $(".tooltip").css({top: top,left: left}).show();
    console.log (left, top);
  });
  $(".toggle").mouseout(function() {
    $(".tooltip").hide();
  });