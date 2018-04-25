//画线
function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.lineWidth=lineWidth
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.closePath();
    ctx.stroke();
}
//画圆
function setCircle(x,y,r){
    ctx.beginPath()
    ctx.arc(x,y,r,0,Math.PI*2)
    ctx.fill()
}