black.onclick = function(e){
    ctx.strokeStyle = 'black'
    black.classList.add('action')
    red.classList.remove('action')
    green.classList.remove('action')
    blue.classList.remove('action')
}
red.onclick = function(){
    ctx.strokeStyle = 'red'
    black.classList.remove('action')
    red.classList.add('action')
    green.classList.remove('action')
    blue.classList.remove('action')
}
green.onclick = function(){
    ctx.strokeStyle = 'green'
    black.classList.remove('action')
    red.classList.remove('action')
    green.classList.add('action')
    blue.classList.remove('action')
}
blue.onclick = function(){
    ctx.strokeStyle = 'blue'
    black.classList.remove('action')
    red.classList.remove('action')
    green.classList.remove('action')
    blue.classList.add('action')
}