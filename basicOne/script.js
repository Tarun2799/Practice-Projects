const circle = document.getElementById('circle');

let x , y;

// document.addEventListener("mousemove", function(e){
//   x = e.clientX;
//   y = e.clientY;
  
//   requestAnimationFrame(animateCircle);
// })

document.addEventListener("mousemove", function(e){
    x = e.clientX;
    y = e.clientY;
})

function animateCircle(){
  circle.style.top = y -10 + "px";
  circle.style.left = x -10 + "px";

  requestAnimationFrame(animateCircle); // recursively calling this.

}
animateCircle();




// we can do this, also. 
// document.addEventListener("mousemove", function(e){
//     x = e.clientX;
//     y = e.clientY;

//     circle.style.top = y + "px";
//     circle.style.left = x + "px";
// })