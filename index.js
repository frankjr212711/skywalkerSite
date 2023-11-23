const nav = document.querySelector('nav')
const  navContentTop = nav.querySelector('.nav-content-top')
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelector('.nav-links');
const links = [...document.querySelectorAll('.nav-links li a')]
const menuLinks = document.querySelectorAll('.menu-link');
const overLay = document.querySelector('.overlay');
const textBox = document.querySelector('.text-box');
const scrollBtn = document.querySelector('.scroll_btn');
const megaDropMenu = document.querySelector('.mega-drop-menu');
const dropMenu = document.querySelector('.drop-menu');
const contactForm = document.querySelector('.contact_form');

  

window.onscroll = function() {
  const scrollData = document.documentElement.scrollTop;
  scrollData > 20 ? navContentTop.classList.add('close') : navContentTop.classList.remove('close'); 
  scrollData > 20 ? nav.classList.add('sticky') : nav.classList.remove('sticky'); 
  // scrollData > 20 ? hero.classList.add('open') : hero.classList.remove('open'); 

  // scrollData < 500 ? scrollBtn.classList.add('flash') : scrollBtn.classList.remove('flash')
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

const activePage = window.location.href;


  links.forEach(link => {
    if(link.href.includes(`${activePage}`)) {
      link.classList.add('active')
    }
  })

// $(document).ready(function(){
//   let typed = new Typed('.typing', {
//       strings: ["Skywalker", "Pamello", "Crystello", "Waterello"],
//       typeSpeed: 150,
//       backSpeed: 150,
//       loop: true
//   })
  
menuLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    if(link.classList.contains('active')) {
      link.classList.remove('active');
    } else {
      menuLinks.forEach(link => {
        link.classList.remove('active');
      })
      link.classList.toggle('active');
    }
  })
})

megaDropMenu.addEventListener('mouseleave', function() {
  console.log(this.parentElement.classList.remove('active'));
})

dropMenu.addEventListener('mouseleave', function() {
  console.log(this.parentElement.classList.remove('active'));
})






  document.getElementById('next').onclick = function() {
   let lists = document.querySelectorAll('.item');
    document.querySelector('#slide').appendChild(lists[0]);
  }

  document.querySelector('#prev').onclick = function() {
   let lists = document.querySelectorAll('.item');
    document.querySelector('#slide').prepend(lists[lists.length -1]);
  }


  window.onload = function() {
   setInterval(() => {

    // let lists = document.querySelectorAll('.item');
    // document.querySelector('#slide').prepend(lists[lists.length -1]);

    // let lists = document.querySelectorAll('.item');
    // document.querySelector('#slide').appendChild(lists[0]);

   }, 5000)
}
