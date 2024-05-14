const coordinates = {
    x:0,
    y:0
}


const circles = document.querySelectorAll(".circle");

const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e"
];

circles.forEach(function(circle, index){
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
})

// console.log(colors.length)



window.addEventListener("mousemove",function(e){
    coordinates.x = e.clientX;
    coordinates.y = e.clientY;

    // console.log(coordinates)

})


function animateCircles(){

    let x = coordinates.x;
    let y = coordinates.y;

    circles.forEach(function(circle, index){
        circle.style.top = y - 12 + "px"; // yahan -12 isliye hai, because circle ki length humne 24px li hai., isse humara cursor circle k center mai aajayega.
        circle.style.left = x -12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0]; 
        x += (nextCircle.x - x) * 0.2;
        y += (nextCircle.y - y) * 0.2;


    })
    requestAnimationFrame(animateCircles);
}

animateCircles()
