const colorContainer=document.getElementById("colorContainer");
let random=null;
let options=document.getElementById("options")
let option=document.getElementsByClassName("option")
generateARandomNumber=(min,max)=>{
    return min+Math.floor(Math.random()*(max-min+1))
}
generateARandomColor=()=>{
    red=generateARandomNumber(0,255)
    green=generateARandomNumber(0,255)
    blue=generateARandomNumber(0,255)
    return `rgb(${red},${green},${blue})`
}
let ansKey=generateARandomNumber(0,3)

startGame=()=>{
   
    random=generateARandomColor()
colorContainer.innerText=random
for(let i=0;i<4;i++){
let div=document.createElement("div")
div.className="option"
div.setAttribute("onclick","checkWinner(this)")
div.style.backgroundColor=i===ansKey ? random :generateARandomColor()
options.append(div)
}
}
startGame()
console.log(ansKey)

function checkWinner(ele){
    console.log(ele)
    console.log(ele.style.backgroundColor===random)
    console.log( typeof random);
    
    const gen=ele.style.backgroundColor
    console.log( typeof gen);
   if(random==gen ){
    console.log("w")
 }else{
    console.log("b")
   }
    
}