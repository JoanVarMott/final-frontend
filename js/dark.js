const swith = document.querySelector(".switch");

 swith.addEventListener("click", _Event=> {
         swith.classList.toggle("active");
         document.body.classList.toggle("active");
     })