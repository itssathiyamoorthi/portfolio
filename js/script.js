let icon = document.querySelector('.menu');
let ul = document.querySelector('ul');

icon.addEventListener('click',()=>{
  ul.classList.toggle('showdata');
  if(ul.className === 'showdata'){
      document.getElementById('bar').className="fa-solid fa-xmark"
      ul.style.top="0"
      console.log(ul)

      
  }
  else{
        document.getElementById('bar').className="fa-solid fa-bars"
        ul.style.top="-450px"
        console.log(ul)
    
  }
})

// resume-----------------------------
let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content .res-contact");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

// resume end-----------------------------


  // skills tab menu start-----------------------------
let skills_tabs = document.querySelectorAll(".skills-tabs h3");
let skills_tabContents = document.querySelectorAll(".skills-tab-content .skills-res-contact");
skills_tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    skills_tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    skills_tabContents[index].classList.add("active");
    skills_tabs[index].classList.add("active");
  });
});

  // skills tab menu start-----------------------------

  let project_tabs = document.querySelectorAll(".project-tabs h3");
  let project_tabContents = document.querySelectorAll(".project-tab-content .project-res-contact");
  project_tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      project_tabContents.forEach((content) => {
        content.classList.remove("active");
        console.log(content)
      });
      project_tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      project_tabContents[index].classList.add("active");
      project_tabs[index].classList.add("active");
    });
  });



  //project 

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }







  function updateCarouselImages() {
    const primaryCarouselItems = document.querySelectorAll('#carouselExampleAutoplaying .carousel-item img');
    const secondaryCarouselItems = document.querySelectorAll('#carouselExampleSecondary .carousel-item img');
    const thirdCarouselItems = document.querySelectorAll('#carouselExampleThird .carousel-item img');

    // Swap images between primary carousel and secondary carousel
    primaryCarouselItems.forEach((img, index) => {
      if (secondaryCarouselItems[index]) {
        img.src = secondaryCarouselItems[index].src;
      }
    });

    // Optionally, restart the primary carousel
    const primaryCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleAutoplaying'));
    primaryCarousel.to(0); // Go to the first slide
  }

  // Function to change images in the third carousel
  function updateCarouselImagesThird() {
    const primaryCarouselItems = document.querySelectorAll('#carouselExampleAutoplaying .carousel-item img');
    const thirdCarouselItems = document.querySelectorAll('#carouselExampleThird .carousel-item img');

    // Swap images between primary carousel and third carousel
    primaryCarouselItems.forEach((img, index) => {
      if (thirdCarouselItems[index]) {
        img.src = thirdCarouselItems[index].src;
      }
    });

    // Optionally, restart the primary carousel
    const primaryCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleAutoplaying'));
    primaryCarousel.to(0); // Go to the first slide
  }

  // Add event listener to the button in the third div
  document.getElementById('changeImageButtonThird').addEventListener('click', updateCarouselImagesThird);