//监听用户
function listnToUser(canvas){
    var painting=false //判断状态
    var lastpoint={x:undefined,y:undefined}
    if(document.body.ontouchstart !== undefined){
        //触摸开始
        canvas.ontouchstart =function(a){
            var x = a.touches[0].clientX
            var y = a.touches[0].clientY
            painting=true
            if(usingEraser){
                ctx.clearRect(x-5,y-5,15,15)
            }else{
                lastpoint={x:x,y:y}
                // setCircle(x,y,2)
            }
        }
        canvas.ontouchmove =function(a){
            var x = a.touches[0].clientX
            var y = a.touches[0].clientY
            if(!painting){
                return
            }
            if(usingEraser){
                ctx.clearRect(x-5,y-5,15,15)
            }else{
                var newpoint={x:x,y:y}
                //setCircle(x,y,2)
                drawLine(lastpoint.x,lastpoint.y,newpoint.x,newpoint.y)//两个圆点的连线
                lastpoint=newpoint  //把最后的圆点给lastpoint
            }
        }
        canvas.ontouchend =function(a){
            painting=false
        }
    }else{
        //鼠标按下
        canvas.onmousedown = function(a){
            var x = a.clientX
            var y = a.clientY
            painting=true
            if(usingEraser){
                ctx.clearRect(x-5,y-5,15,15)
            }else{
                lastpoint={x:x,y:y}
                //setCircle(x,y,2)
            }
        }
        //鼠标移动
        canvas.onmousemove = function(a){
            var x = a.clientX
            var y = a.clientY
            if(!painting){
                return
            }
            if(usingEraser){
                ctx.clearRect(x-5,y-5,15,15)
            }else{
                var newpoint={x:x,y:y}
                //setCircle(x,y,2)
                drawLine(lastpoint.x,lastpoint.y,newpoint.x,newpoint.y)//两个圆点的连线
                lastpoint=newpoint  //把最后的圆点给lastpoint
            }
        }
        //鼠标松开
        canvas.onmouseup = function(a){
            painting=false
        }
    }
}
