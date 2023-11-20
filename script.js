const nav = document.querySelector('nav'),
  navContentTop = nav.querySelector('.nav-content-top'),
  hero = document.querySelector('.hero'),
  thinkText = document.querySelector('.text-1'),
  menuBtn = document.querySelector('.menu-btn'),
  closeBtn = document.querySelector('.close-btn'),
  navLinks = document.querySelector('.nav-links'),
  links = [...document.querySelectorAll('.nav-links li a')],
  menuLinks = document.querySelectorAll('.nav-links li'),
  overLay = document.querySelector('.overlay'),
  textBox = document.querySelector('.text-box'),
  scrollBtn = document.querySelector('.scroll_btn');

  const contactForm = document.querySelector('.contact_form');




  // contactForm.addEventListener('submit', function(e) {
  //   e.preventDefault()
  //   let fName = document.querySelector('#fname').value
  //   let lName = document.querySelector('#lname').value
  //   let email = document.querySelector('#mail').value
  //   let phone = document.querySelector('#num').value
  //   let title = document.querySelector('#title').value
  //   let textBody = document.querySelector('#textBody')

  //   console.log(fName, lName, email, phone, title, textBody)

  // })



  

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
  



// JOBS

const jobs = [
    {
    title: "Security",
    image: "assets/images/png-icons/security-guard.png",
    details: "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "0",
    link: "#"
  },
  {
    title: "Sales Manager",
    image: "assets/images/png-icons/performance.png",
    details: "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "0",
    link: "#"
  },
  {
    title: "Sales Boys",
    image: "assets/images/png-icons/coupon.png",
    details: "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "0",
    link: "#"
  },
  {
    title: "Sales Girls",
    image: "assets/images/png-icons/coupon.png",
    details: "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "0",
    link: "#"
  },
  {
    title: "Accounts Officer",
    image: "assets/images/png-icons/accounts.png",
    details: "Responsible for designing, developing and maintaining software systems and applications.sponsible for designing, developing and maintaining software ",
    openPositions: "0",
    link: "#"
  },
  {
    title: "House Help",
    image: "assets/images/png-icons/house-help.png",
    details: "Responsible for designing, developing and maintaining software systems and applications.sponsible for designing, developing and maintaining software ",
    openPositions: "0",
    link: "#"
  },
  {
    title: "Cleaner",
    image: "assets/images/png-icons/cleaning.png",
    details: "Responsible for designing, developing and maintaining software systems and applications ponsible for designing, developing and maintaining software systems and application",
    openPositions: "0",
    link: "#"
  },
  {
    title: "Driver",
    image: "assets/images/png-icons/driver.png",
    details: "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "0",
    link: "#"
  },
  {
    title: "Loader",
    image: "assets/images/png-icons/loading.png",
    details: "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "0",
    link: "#"
  }
]

const jobsHeading = document.querySelector('.jobs-list-container h2');
const jobsContainer = document.querySelector('.jobs-list-container .jobs'); 
const jobSearch = document.querySelector('.jobs-list-container input[type="search"]');

console.log(jobSearch)

let searchTerm = "";

// FIXED NUMBER OF JOB OPENINGS
  if(jobs.length === 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`
  }


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