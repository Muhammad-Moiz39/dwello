const toggleMenu = () => {
    let navBar = document.querySelector("#navbar");
    let menu = document.getElementById("nav-menu");

    navBar.classList.toggle("active");
};




$('#reviews-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: ".prev",
  nextArrow: ".next",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
