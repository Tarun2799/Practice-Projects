// //generate a random color


// Math.random() => STATIC METHOD : returns floating point [0,1) : 
            //  0 <= Math.random() < 1 

            
// const randomColor = function () {
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };
  
//   let intervalId;
//   const startChangingColor = function () {

//     if (!intervalId) {
//       intervalId = setInterval(changeBgColor, 1000);
//     }
  
//     function changeBgColor() {
//       document.body.style.backgroundColor = randomColor();
//     }
//   };


//   const stopChangingColor = function () {
//     clearInterval(intervalId);
//     intervalId = null;
//   };
  
//   document.querySelector('#start').addEventListener('click', startChangingColor);
  
//   document.querySelector('#stop').addEventListener('click', stopChangingColor);



const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// function changeBackgroundColor(){
//     document.body.style.backgroundColor = randomColor();
// }
// setInterval(changeBackgroundColor, 1000);

// agar ye aise hi rakh denge to sidha apne app chelta rahega , na rukega . and we see that also , but we have to start only when we click start button.

let intervalId; // ye bahar issliye define kiye, taki isko clearInterval mai use kar skke.

const startChangingColor = function(){

function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
}
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }
};


document.getElementById('start').addEventListener("click",startChangingColor);


const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}


document.getElementById('stop').addEventListener('click', stopChangingColor);