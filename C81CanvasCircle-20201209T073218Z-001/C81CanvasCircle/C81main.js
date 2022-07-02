var canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
//canvas.getContext("2d").beginPath();
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(200,200,15,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("x="+mouse_x+"y="+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth=5;
    ctx.arc(mouse_x,mouse_y,15,0,2*Math.PI);
    ctx.stroke();
}
