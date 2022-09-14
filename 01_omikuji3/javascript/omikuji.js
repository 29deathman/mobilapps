"use strict";

window.addEventListener("DOMContentLoaded",
function(){
    $("header").textillate({
        loop: false, 
        minDisplayTime: 2000, 
        initialDelay: 2000, 
        autoStart: true, 
        in: { 
        effect: "fadeInLeftBig", 
        delayScale: 1.5, 
        delay: 50, 
        sync: false, 
        shuffle: true 
        }
        });
        $(function(){
        ScrollReveal().reveal("#btn1", { duration: 9000 });
        });
    setTimeout(
        function(){
    let popMessage="いらっしゃい！おみくじ引いてって";
    window.alert(popMessage);},
    "5000");
}, false
);
let soundEndflag="0";
const btn1=document.getElementById("btn1");
const omikujiText=document.getElementById("omikujiText");
const omikujiTextImage=document.getElementById("omikujiTextImage");
btn1.addEventListener("click",
    function(){
        //var n=Math.floor(Math.random()*3);
        //switch(n){
           //case 0:
               // btn1.textContent="Very Happy!!";
            //    btn1.style.color="#FF0000";
            //     btn1.style.fontSize="40px ";
                //break;
           // case 1:
            //    
           // case 2:
               // btn1.textCont btn1.textContent="Happy!!";
            //     btn1.style.color="#FF0001";
            //     btn1.style.fontSize="30px";
            //    // break;ent="UnHappy!!";
                // btn1.style.color="#261e1c";
                // btn1.style.fontSize="20px";
                //break;
        //}
        if(soundEndflag==1){
            soundControl("end","");
        }
        let resultSound=["sound/omikuji_sound2.mp3","sound/omikuji_sound3.mp3","sound/omikuji_sound4.mp3","sound/omikuji_sound1.mp3","sound/omikuji_sound5.mp3"];
        let resultText = ["img(いろいろ)/daikichi.png","img(いろいろ)/chukichi.png","img(いろいろ)/syokichi.png","img(いろいろ)/suekichi.png","img(いろいろ)/daikyo.png"];
        /*let resultColor=["#FF0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
        let resultFontSize=["90px","80px","70px","60px","50px","40px"];*/
        let resultMaxSpeed = [10,10,8,5,5];
        let resultMaxSize =[30,20,30,15,20];
        let resultImage = ["img(いろいろ)/star.png","img(いろいろ)/redLeaves12.png","img(いろいろ)/redLeaves11.png","img(いろいろ)/redLeaves10.png","img(いろいろ)/redLeaves9.png"];
        let n= Math.floor(Math.random()*resultText.length);
        omikujiTextImage.src=resultText[n];
        omikujiTextImage.classList.add("omikujiPaper");
        omikujiTextImage.addEventListener("animationed",
        function(){
            omikujiTextImage.classList.remove("omikujiPaper");
            omikujiTextImage.style.sound=resultSound[n];
        },false);
        
        /*omikujiText.style.color=resultColor[n];
        omikujiText.style.fontSize=resultFontSize[n];*/
       
        w_sound=resultSound[n];
        soundControl("start",w_sound);
        soundEndflag="1";
     
$(document).snowfall("clear");
setTimeout(
    function(){

$(document).ready(function(){
$(document).snowfall({
    
minSpeed : 1,
minSize : 1, 
maxSpeed: resultMaxSpeed[n],
maxSize: resultMaxSize[n],
image: resultImage[n],
});
});
    }, "200");},false);
    let w_sound
    let music
    function soundControl(status, w_sound){
        if(status=="start"){
            music = new Audio(w_sound);
            music.currentTime=0;
            music.play();
        } else if(status==="end"){
            music.pause();
            music.currentTime=0;
        }
    }