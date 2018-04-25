var canvasId = document.getElementById('x')
var ctx = canvasId.getContext('2d')
autoGetCanvasSize(canvasId)//自动canvas设置宽高
listnToUser(canvasId)//监听用户
var usingEraser = false//判断状态
var lineWidth = 3