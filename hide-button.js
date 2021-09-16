const app = document.querySelector(".app");
const inactiveTime = 5000;
let mouseLastMoveTime = new Date();

document.addEventListener("mouseover", function(){
app.classList.remove("inactive");
mouseLastMoveTime = new Date();
document.body.style.cursor = "auto";
});

function deactivateApp(){
 let nowTime = new Date();
 let deltaTime = nowTime - mouseLastMoveTime;
 if(deltaTime >= inactiveTime){
  app.classList.add("inactive");

  document.body.style.cursor = "none";
 }

 requestAnimationFrame(deactivateApp);
}

deactivateApp();
