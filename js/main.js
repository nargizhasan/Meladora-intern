


// Fixed Navigation Bar all over the page
$(window).scroll(() => {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    // Note: The class Fixed-top comes from Bootstrap make navbar fixed
    $(".navbar").addClass("fixed-top");
    $(".navbar").addClass("navbar-custom-bg");
  } else {
    $(".navbar").removeClass("fixed-top");
    $(".navbar").removeClass("navbar-custom-bg");
  }
});

// Main SWIPER Start
var swiper = new Swiper(".mainSwiper", {
  autoplay: {
    delay: 2000,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 60,
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,

      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 55,
    },
  },
  loop: true,
  pagination: {
    clickable: true,
  },
});
// Main SWIPER Ends




/* PC Search Form Start */
$(document).ready(function () {
  $(".fire-search").on("click", () => {
    $("#search").addClass("open");
    $("#input").focus();
  });
  $("#search, #close-search").on("click keyup", function (event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });
});
/* PC Search Form Ends */

// To categorize product list via Data Attribute
$(document).on("click", ".cat-name-button", function (e) {
  var type = $(this).data("cat-name");
  $(".cat-name-button").removeClass("active");

  if (type == "all") {
    $(".product").fadeOut(0);
    $(".product").fadeIn(1000);
    // To indicate Selected Category Name
    $("a[data-cat-name=" + type + "]").addClass("active");
  } else {
    $("a[data-cat-name=" + type + "]").addClass("active");

    $(".product").hide();
    $("#" + type + ".product").fadeIn(1000);
  }
});


const filter = document.querySelectorAll('.filter-products_item')
$('.filter-products_item').click((e)=>{
    $('.product-details_img').attr('src',`/img/products-img${e.currentTarget.id}.jpg`);
    $('.product-details_title').text(`${e.currentTarget.children[1].children[0].innerText}`);
    $('.product-details').addClass('active')
    });
$('.product-details_btn.menu-close_btn').click((e)=>{
    $('.product-details').removeClass('active')
})


// Gallery SWIPER Start
var swiper = new Swiper(".gallerySwiper", {
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 60,
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,

      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 55,
    },
  },

  loop: true,
});
// Gallery SWIPER Ends
