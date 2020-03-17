(function($) {
  /*------------------
		Background Set
	--------------------*/
  $(".set-bg").each(function() {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*------------------
		Hero Slider
	--------------------*/
  $(".hero-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    mouseDrag: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    autoplay: true
  });

  /*--------------------------
		Loans slide calculator
	------------------------------*/
  $("#slider-range-max").slider({
    range: "max",
    min: 1000,
    max: 15000,
    step: 10,
    change: function(event, ui) {
      $("#loan-value").text("$" + ui.value);
      $("#lone-emi").text("$" + emi(ui.value));
      console.log(ui);
    },
    slide: function(event, ui) {
      $("#loan-value").text("$" + ui.value);
      $("#lone-emi").text("$" + emi(ui.value));
    }
  });

  $("#lc-inc").click(function() {
    var value = $("#slider-range-max").slider("value");
    var step = $("#slider-range-max").slider("option", "step");
    $("#slider-range-max").slider("value", value + step);
  });

  $("#lc-dec").click(function() {
    var value = $("#slider-range-max").slider("value");
    var step = $("#slider-range-max").slider("option", "step");
    $("#slider-range-max").slider("value", value - step);
  });

  function emi(amount) {
    var result,
      emi = 52;
    result = Math.round(amount / emi);
    return result;
  }

  /*------------------
		Accordions
	--------------------*/
  $(".panel-link").on("click", function(e) {
    $(".panel-link").removeClass("active");
    var $this = $(this);
    if (!$this.hasClass("active")) {
      $this.addClass("active");
    }
    e.preventDefault();
  });
})(jQuery);
