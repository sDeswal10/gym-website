var navList = document.getElementById("navList");
function showMenu(){
    navList.style.right = "0px";
}
function hideMenu(){
    navList.style.right = "-200px";
}
// --------------------gallery-------------------
const swiper = new Swiper('.swiper', {
   
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });