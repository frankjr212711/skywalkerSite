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


// JOBS

const jobs = [
 {
 title: "Security",
 image: "assets/icons/security-guard.png",
 details: "Responsible for designing, developing and maintaining software systems and applications.",
 openPositions: "0",
 link: "#"
},
// {
//  title: "Sales Manager",
//  image: "assets/icons/performance.png",
//  details: "Responsible for designing, developing and maintaining software systems and applications.",
//  openPositions: "0",
//  link: "#"
// },
// {
//  title: "Sales Boys",
//  image: "assets/icons/coupon.png",
//  details: "Responsible for designing, developing and maintaining software systems and applications.",
//  openPositions: "0",
//  link: "#"
// },
{
 title: "Sales Girls",
 image: "assets/icons/coupon.png",
 details: "Responsible for designing, developing and maintaining software systems and applications.",
 openPositions: "0",
 link: "#"
},
// {
//  title: "Accounts Officer",
//  image: "assets/icons/accounts.png",
//  details: "Responsible for designing, developing and maintaining software systems and applications.sponsible for designing, developing and maintaining software ",
//  openPositions: "2",
//  link: "#"
// },
// {
//  title: "House Help",
//  image: "assets/icons/house-help.png",
//  details: "Responsible for designing, developing and maintaining software systems and applications.sponsible for designing, developing and maintaining software ",
//  openPositions: "5",
//  link: "#"
// },
// {
//  title: "Cleaner",
//  image: "assets/icons/cleaning.png",
//  details: "Responsible for designing, developing and maintaining software systems and applications ponsible for designing, developing and maintaining software systems and application",
//  openPositions: "2",
//  link: "#"
// },
{
  title: "Driver",
  image: "assets/icons/driver.png",
  details: "Responsible for designing, developing and maintaining software systems and applications.",
  openPositions: "0",
  link: "#"
},
// {
//  title: "Loader",
//  image: "assets/icons/loading.png",
//  details: "Responsible for designing, developing and maintaining software systems and applications.",
//  openPositions: "0",
//  link: "#"
// }
]

const jobsHeading = document.querySelector('.jobs-list-container h2');
const jobsContainer = document.querySelector('.jobs-list-container .jobs'); 
const jobSearch = document.querySelector('.jobs-list-container input[type="search"]');

let searchTerm = "";

// FIXED NUMBER OF JOB OPENINGS
if(jobs.length === 1) {
 jobsHeading.innerHTML = `${jobs.length} Job`
} else {
 jobsHeading.innerHTML = `${jobs.length} Jobs`
}


console.log(jobsHeading)





// JOBS FUCTIONS
const createJobListingCards = () => {
 jobsContainer.innerHTML = "";
jobs.forEach((job) => {
 if(job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
   let jobCard = document.createElement("div");
   jobCard.classList.add('job');
   let image = document.createElement('img');
   image.src = job.image;
 
   let title = document.createElement('h3');
   title.innerHTML = job.title;
   title.classList.add('job-title')

   let details = document.createElement('div');
   details.innerHTML = job.details;
   details.classList.add('details')

   let detailsBtn = document.createElement('a');
    detailsBtn.href = job.link;
    detailsBtn.innerHTML = "More details"
    detailsBtn.classList.add('details-btn');

   let openPositions = document.createElement('span');
     openPositions.classList.add('open-positions');

     if(job.openPositions == 1) {
       openPositions.innerHTML = `${job.openPositions} open position`
     } else {
       openPositions.innerHTML = `${job.openPositions} open positions`
     }

   jobCard.appendChild(image);
   jobCard.appendChild(title);
   jobCard.appendChild(details);
   jobCard.appendChild(detailsBtn);
   jobCard.appendChild(openPositions);

   jobsContainer.appendChild(jobCard);
 }
});
};

createJobListingCards();


jobSearch.addEventListener('input', (e) => {
 searchTerm = e.target.value;
 createJobListingCards();
})

