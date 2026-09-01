const toggleMenu = () => {
    let navBar = document.querySelector("#navbar");
    let menu = document.getElementById("nav-menu");

    navBar.classList.toggle("active");
};




$('.about-cards').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
