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




  //progress bar about me page

  const container = document.querySelector(".container");

const courses = [
  { course: "HTML", percent: 99, color: "#f9ca24" },
  { course: "CSS", percent: 65, color: "#78e08f" },
  { course: "JavaScript", percent: 35, color: "#c56cf0" },
  // { course: "Bootstrap", percent: 85, color: "#badc58" },
];

courses.forEach((course) => {
  container.innerHTML += `
  <div class="progess-group">
  <div class="circular-progress" >
    <span class="course-value" style="color:${course.color}">0%</span>
  </div>
  <label class="text" style="color:${course.color}">${course.course}</label>
</div>
  `;
});

//style="  background: conic-gradient(${course.color} ${3.6 * course.percent}deg, #fff 0deg);"

const progressGroups = document.querySelectorAll(".progess-group");

progressGroups.forEach((progress, index) => {
  let progressStartValue = 0;
  let progressStartEnd = courses[index].percent;
  let speed = 50;
  let progessTimer = setInterval(() => {
    progressStartValue++;
    if (progressStartValue == progressStartEnd) {
      clearInterval(progessTimer);
    }
    progress.querySelector(".circular-progress").style.background = `
    conic-gradient(${courses[index].color} ${3.6 * progressStartValue}deg, #fff 0deg)`;

    progress.querySelector(".course-value").innerHTML = progressStartValue + "%";
  }, speed);
});






  