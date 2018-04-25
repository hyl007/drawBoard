//自动canvas设置宽高
function autoGetCanvasSize(canvas){
    getCanvasSize()
    window.onresize=function(){
        getCanvasSize()
    }
    //获得canvas的宽高
    function getCanvasSize(){
        var pageWidth = document.documentElement.clientWidth
        var pageHeight = document.documentElement.clientHeight
        canvas.width = pageWidth
        canvas.height = pageHeight
    }
}