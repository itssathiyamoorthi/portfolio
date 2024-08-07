let icon = document.querySelector('.menu');
let ul = document.querySelector('ul');




icon.addEventListener('click',()=>{
   ul.classList.toggle('showdata');
   if(ul.className === 'showdata'){
       document.getElementById('bar').className="fa-solid fa-xmark"
       console.log("hello")
   }
   else{
        document.getElementById('bar').className="fa-solid fa-bars"
   }
})

// resume-----------------------------
let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");
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


