const open = document.querySelector(".toggle-menu");
const seasonsMenu = document.querySelector(".seasons");

open.addEventListener("click", function(){
 seasonsMenu.classList.toggle("open");
 open.classList.toggle("rotate");
});