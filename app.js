var con = document.querySelector("#container");
var love = document.querySelector("i");

con.addEventListener("dblclick",function(){
    love.style.transform = "translate(-4%,45%) scale(1)"
    love.style.opacity = '0.8'
    love.style.backgroundColor = 'red'

    setTimeout(function(){
        love.style.opacity = 0
    },1000)
    setTimeout(function(){
        love.style.transform = "translate(-4%,45%) scale(0)"
    },2000)
})