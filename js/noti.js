// ==UserScript==
// @name Alert low crash out

// @namespace http://tampermonkey.net/

// @version 0.1

// @description try to take over the world!

// @author SaviorXXI

// @match https://stake.com/casino/games/crash

// @grant none

// ==/UserScript==
var lastPayout = 0;
var lastTimeLow = [];
var newTime = [];
var checkLow = true;

function notification1() {
    var snd = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-doorbell-single-press-333.mp3");  
    snd.play();
}

function notification2() {
    var snd = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-tile-game-reveal-960.mp3");  
    snd.play();
}

function notification3() {
    var snd = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-interface-option-select-2573.mp3");  
    snd.play();
}

function notification4() {
    var snd = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-confirmation-tone-2867.mp3");  
    snd.play();
}



function getCurrentTime() {
    return new Date().toLocaleString();
}

function getTime(){
    var curTime =  new Date().toLocaleTimeString('en-US', { hour12: false,hour: "numeric", minute: "numeric",second:"numeric"});
    curTime = curTime.split(":")
    return [parseInt(curTime[0]),parseInt(curTime[1]),parseInt(curTime[2])]
}

function alertLastPayout(){
    console.log("[Alert]        -  Payout: "+ lastPayout + " At: " + getCurrentTime());
}

function notificationLow() {
    var sc = newTime[2]-lastTimeLow[2]
    var min = newTime[1]-lastTimeLow[1]
    var hou = newTime[0]-lastTimeLow[0]
    if(sc < 0){
        sc = 60 + sc
        min = min - 1
    }
    if(min < 0){
        min = min + 60
        hou = hou - 1
    }
    console.log("[Notification] -  " + hou + ":" + min + ":" + sc+ " Payout 1.00 did not appear");
}

lastTimeLow = getTime();

function doThings() {
    var payout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    var curTimeNoLow = 0
    if(payout != lastPayout){
        lastPayout = payout;
        if(payout == 1.0){
            notification1();
            alertLastPayout();
            lastTimeLow = getTime();
            checkLow = true;
        }
        else if(payout == 1.01){
            notification2();
            alertLastPayout();
        }
        else if(payout > 1.01 && payout <=1.08){
            notification3();
            alertLastPayout();
        }
        newTime = getTime();
        if(lastTimeLow[0] == newTime[0] && lastTimeLow[1] <= newTime[1] - 10){
            if(checkLow)
                notification4();
                checkLow = false;
            notificationLow();
        }
    }
}

var theShit = setInterval(doThings, 1000);
