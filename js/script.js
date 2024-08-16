  let icon = document.querySelector('.menu');
  let ul = document.querySelector('ul');

icon.addEventListener('click',()=>{
    ul.classList.toggle('showdata');
    if(ul.className === 'showdata'){
        document.getElementById('bar').className="fa-solid fa-xmark"
    }
    else{
          document.getElementById('bar').className="fa-solid fa-bars"
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
