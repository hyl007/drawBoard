//工具选择
pencil.onclick = function(){
    usingEraser=false
    lineWidth=3
    pencil.classList.add('action')
    pen.classList.remove('action')
    eraser.classList.remove('action')
}
pen.onclick = function(){
    usingEraser=false
    lineWidth=6
    pen.classList.add('action')
    eraser.classList.remove('action')
    pencil.classList.remove('action')
}
eraser.onclick = function(){
    usingEraser = true
    eraser.classList.add('action')
    pen.classList.remove('action')
    pencil.classList.remove('action')
}
trashbin.onclick = function(){
    ctx.clearRect(0,0,canvasId.width,canvasId.height);
}
download.onclick = function(){
    var url = canvasId.toDataURL("img/png")
    var a=document.createElement('a')
    document.body.appendChild(a)
    a.href =url
    a.download = '我的画板'
    a.target = '_blank'
    a.click()
}
