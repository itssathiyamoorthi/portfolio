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

// Project


var modal = document.getElementById("mymodal");

var btn1 = document.getElementById("mybtn1");
var btn2 = document.getElementById("mybtn2");
var btn3 = document.getElementById("mybtn3");
var btn4 = document.getElementById("mybtn4");

var span = document.getElementsByClassName("close")[0];

btn1.onclick = function(){

modal.style.display = "block";
}
btn2.onclick = function(){

modal.style.display = "block";
}
btn3.onclick = function(){

modal.style.display = "block";
}
btn4.onclick = function(){

modal.style.display = "block";
}

span.onclick = function(){
modal.style.display = "none";

}

window.onclick = function(event){
if(event.target == modal){
  modal.style.display="none";
}
}
