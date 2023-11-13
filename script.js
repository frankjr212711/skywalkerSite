const nav = document.querySelector('nav'),
      navContentTop = nav.querySelector('.nav-content-top'),
      hero = document.querySelector('.hero'),
      thinkText = document.querySelector('.text-1'),
      menuBtn = document.querySelector('.menu-btn'),
      closeBtn = document.querySelector('.close-btn'),
      navLinks = document.querySelector('.nav-links'),
      overLay = document.querySelector('.overlay'),
      textBox = document.querySelector('.text-box'),
      scrollBtn = document.querySelector('.scroll_btn');
  
window.onscroll = function() {
  const scrollData = document.documentElement.scrollTop;
  scrollData > 20 ? navContentTop.classList.add('close') : navContentTop.classList.remove('close'); 
  scrollData > 20 ? nav.classList.add('sticky') : nav.classList.remove('sticky'); 
  scrollData > 20 ? hero.classList.add('open') : hero.classList.remove('open'); 

  scrollData < 500 ? scrollBtn.classList.add('flash') : scrollBtn.classList.remove('flash')
}

menuBtn.addEventListener('click', function() {
  navLinks.classList.add('open');
  overLay.classList.add('dark');
  textBox.classList.add('slide');
  menuBtn.classList.add('active');
  navContentTop.classList.add('active');
})

closeBtn.addEventListener('click', function() {
  navLinks.classList.remove('open');
  overLay.classList.remove('dark');
  textBox.classList.remove('slide');
  menuBtn.classList.remove('active');
  navContentTop.classList.remove('active');
})


scrollBtn.addEventListener('click', function() {
  document.querySelector('html').scrollTop = 0
});

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