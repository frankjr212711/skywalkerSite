
const nav = document.querySelector('nav'),
      navContentTop = nav.querySelector('.nav-content-top'),
      hero = document.querySelector('.hero'),
      thinkText = document.querySelector('.text-1'),
      menuBtn = document.querySelector('.menu-btn'),
      closeBtn = document.querySelector('.close-btn'),
      navLinks = document.querySelector('.nav-links'),
      overLay = document.querySelector('.overlay');

window.onscroll = function() {
  const scrollData = document.documentElement.scrollTop;
  scrollData > 20 ? navContentTop.classList.add('close') : navContentTop.classList.remove('close'); 
  scrollData > 20 ? nav.classList.add('sticky') : nav.classList.remove('sticky'); 
  scrollData > 20 ? hero.classList.add('open') : hero.classList.remove('open'); 
}

menuBtn.addEventListener('click', function() {
  navLinks.classList.add('open');
  overLay.classList.add('dark');
  // nav.classList.add('close')

})
closeBtn.addEventListener('click', function() {
  navLinks.classList.remove('open');

  overLay.classList.remove('dark')
  // nav.classList.remove('close')
})
$(document).ready(function(){
  let typed = new Typed('.typing', {
      strings: ["Skywalker", "Pamello", "Crystello", "Waterello"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
  })
  
  // let typed2 = new Typed('.typing2', {
  //     strings: ["Developer", "Designer", "Freelancer"],
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //     loop: true
});