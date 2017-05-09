/*jshint esnext: true, moz: true*/
/*jslint browser:true */
/*global*/

//=======================================================
//GLOBALS
var floatingDivs = document.getElementsByClassName("floating");
var prevPosX= 0, prevPosY = 0;
var html = document.getElementsByTagName("html")[0];
//=======================================================
//MAIN
setInterval(startClock, 1000);

//=======================================================
//CALLBACKS
window.addEventListener("mousemove", moveFloatingDivs);
window.addEventListener("load", firstVisit);
//=======================================================
//FUNCTIONS

function firstVisit(){
    let welcomeBack = document.getElementById("welcomeBack");
    let welcomeFirst = document.getElementById("welcomeFirst");
    let visited = localStorage.getItem("visited");
    let welcomeStr = "Hi my name is JOHAN ";
    let welcomeStr2 = " I am a student Front End developer ";
    let welcomeStr3 = " Here you can browse all my projects and see what I'm currently working on ";
    let welcomeMessages = [welcomeStr," "," ",welcomeStr2," "," ",welcomeStr3]; // " " = delay
    let index = 0, jIndex = 0;
    let oldMsg = "", newMsg = "";
    
    if(visited !== null){
        welcomeBack.style.display = "block";
        setTimeout(()=>{welcomeBack.style.display = "none";},3000);
    }else{
        localStorage.setItem("visited","true");
        
        setTimeout(()=>{
            let print = setInterval(()=>{
                if(index < welcomeMessages[jIndex].length){

                    oldMsg = welcomeFirst.textContent;
                    newMsg = oldMsg.slice(0,oldMsg.length-1);
                    newMsg += welcomeMessages[jIndex][index];

                    welcomeFirst.textContent = newMsg;
                    welcomeFirst.textContent += "_";

                }else{

                    if(jIndex < 6){

                        jIndex++;
                        index = 0;
                        welcomeFirst.textContent = "";

                    }
                    else if(jIndex === 6){
                        clearInterval(print);
                        welcomeFirst.className = "endAnimation";
                        setTimeout(()=>{welcomeFirst.style.display = "none";},1500);
                    }

                }
                index++;
            }, 110);
        },800);
        
    }
}



function oldPosToNum(str){
    let num = "";
    for(let i = 0; i < str.length; i++){
        if(!isNaN(str[i]) || str[i] == "."){
            num += str[i];
        }
        
    }
    
    num = Number(num)+0.5;
    return Math.floor(num);
}


function setPosOnDiv(elm,x,change){
    let comutedLeftPos = getComputedStyle(elm).left;
    let computedTopPos = getComputedStyle(elm).top;
    let newValue = 0;
    
    
    if(x == "x" && change == "inc"){
        newValue = oldPosToNum(comutedLeftPos)+1;
        elm.style.left = `${newValue}px`;
    }
    else if(x == "x" && change == "dec"){
        newValue = oldPosToNum(comutedLeftPos)-1;
        elm.style.left = `${newValue}px`;
    }
    else if(x == "y" && change == "inc"){
        newValue = oldPosToNum(computedTopPos)+1;
        elm.style.top = `${newValue}px`;
    }
    else if(x == "y" && change == "dec"){
        newValue = oldPosToNum(computedTopPos)-1;
        elm.style.top = `${newValue}px`;
    }
}

function moveFloatingDivs(){
    let about = document.getElementById("about");
    let projects = document.getElementById("projects");
    let cv = document.getElementById("cv");
    let aboutProjects = document.getElementById("aboutProjects");
    
    
    let rect = html.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    
    
    if(x-prevPosX > 100 || x-prevPosX < -100 || y-prevPosY > 100 || y-prevPosY < -100){

        if(x < prevPosX){
            setPosOnDiv(about,"x","inc");
            setPosOnDiv(projects,"x","inc");
            setPosOnDiv(cv,"x","inc");
            setPosOnDiv(aboutProjects,"x","inc");
        }
        else if(x > prevPosX){
            setPosOnDiv(about,"x","dec");
            setPosOnDiv(projects,"x","dec");
            setPosOnDiv(cv,"x","dec");
            setPosOnDiv(aboutProjects,"x","dec");
        }

            if(y < prevPosY){
            setPosOnDiv(about,"y","inc");
            setPosOnDiv(projects,"y","inc");
            setPosOnDiv(cv,"y","inc");
            setPosOnDiv(aboutProjects,"y","inc");
        }
        else if(y > prevPosY){
            setPosOnDiv(about,"y","dec");
            setPosOnDiv(projects,"y","dec");
            setPosOnDiv(cv,"y","dec");
            setPosOnDiv(aboutProjects,"y","dec");
        }
        prevPosX = x;
        prevPosY = y;
   }
}


function startClock(){
    let longHand = document.getElementById("longHand");
    let shortHand = document.getElementById("shortHand");
    let secondsHand = document.getElementById("secondsHand");
    let longHandWord = document.getElementById("longHandWord");
    let shortHandWord = document.getElementById("shortHandWord");
    
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let fullHour = 0;
    let currH = 0;
    let currM = 0;
    let currS = 0;
    
    //hour
    fullHour = hour > 12 ? (hour-12)+(minute/60) : hour+(minute/60);
    currH = ((360/12)*fullHour)-90;
    shortHand.style.transform = `rotate(${currH}deg)`;
    //minute
    currM = ((360/60)*minute)-90;
    longHand.style.transform = `rotate(${currM}deg)`;
    //Seconds
    currS = ((360/60)*second)-90;
    secondsHand.style.transform = `rotate(${currS}deg)`;
    

    if(currM > 90 && currM < 270){
        longHandWord.style.transform = `scale(${-1})`;
        longHandWord.style.webkitTransform = `scale(${-1})`;
    }else{
        longHandWord.style.transform = `scale(${1})`;
        longHandWord.style.webkitTransform = `scale(${1})`;
    }
    
    if(currH > 90 && currH < 270){
        shortHandWord.style.transform = `scale(${-1})`;
        shortHandWord.style.webkitTransform = `scale(${-1})`;
    }else{
        shortHandWord.style.transform = `scale(${1})`;
        shortHandWord.style.webkitTransform = `scale(${1})`;
    }
    
    
}
