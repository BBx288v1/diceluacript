// ==UserScript==
// @name Auto crash

// @namespace http://tampermonkey.net/

// @version 0.1

// @description try to take over the world!

// @author SaviorXXI

// @match https://stake.com/casino/games/crash

// @grant none

// ==/UserScript==


var lastPayout = 0;
var timeStart = [];
var newTime = [];
var checkNext = false;
var balance = prompt("Please enter your balance");
var listPayout = [1.1,1.2];
var maxStreakPayout = [20,10];
var countStreakPayout = [0,0]
var payout = listPayout[1];
var multiplier  = 2
var bet = balance/4;
var mainBet = bet;
var profit = 0
var historyCrash = [];
var maxLength = 15
var predictHistory = ["RGRRRRRGRRRRR","GRGGGGGRGGGG","GRGGGGGRGGG","RGGGGRRRRGG","RGGGRGGGRGG","GRRRRRRRRR","GRGGGGGRGG","RGGGGRRRRG","RGGGRGGGRG","GRGGGGRGGG","GRGGGGGRGG","RGGGGRRRR","RGGGRRRGG","RGGGRGGGR","GRGGGGRGG","GRGGGGGRG","GRGGGGGR","GRGGGGRG","RGGRGGRG","RGGGRRRG","GRRRRRR","RGGRGGR","RGGGRRR","RGGRRG","GRRGRR","RGGRR","RGR","GGG"];
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

function getBalance() {
    return document.querySelectorAll("span.weight-semibold.lineHeight-normal")[0].textContent.trim().replace("$","")
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function getTime(){
    var curTime =  new Date().toLocaleTimeString('en-US', { hour12: false,hour: "numeric", minute: "numeric",second:"numeric"});
    curTime = curTime.split(":")
    return [parseInt(curTime[0]),parseInt(curTime[1]),parseInt(curTime[2])]
}

function notiTimeRun() {
    var sc = newTime[2]-timeStart[2]
    var min = newTime[1]-timeStart[1]
    var hou = newTime[0]-timeStart[0]
    if(sc < 0){
        sc += 60;
        min -= 1;
    }
    if(min < 0){
        min += 60;
        hou -= 1;
    }
    if(hou < 0){
        hou += 24;
    }
    console.log("[TimeRun] : " + hou + ":" + min + ":" + sc);
}

function clickBet(){
    document.querySelector("button.variant-success.lineHeight-base.size-medium").click();
}

function sendBet(betValue){
    document.querySelectorAll("input.spacing-expanded")[0].click()
    sleep(500)
    document.querySelectorAll("input.spacing-expanded")[0].value = betValue;
}

function sendPayout(payoutValue){
    document.querySelectorAll("input.spacing-expanded")[1].click()
    sleep(500)
    document.querySelectorAll("input.spacing-expanded")[1].value = payoutValue;
}

function handingHistory(preHistory){
    if(preHistory >= 1 && preHistory < 2){
        return "R"
    }
    else if(preHistory >= 2 && preHistory < 10){
        return "G"
    }
    else if(preHistory >= 10){
        //return "Y"
        return "G"
    }
}

function getNext(){
    if(payout > 0){
        var stringHistory = historyCrash.toString();
        stringHistory = stringHistory.split(',').join('');
        console.log("[================================]");
        notiTimeRun();
        console.log("[History] : " + stringHistory);
        console.log("[Streak]  : " + countStreakPayout.toString());
        console.log("[Profit]  : " + profit.toFixed(8));
        for(var i = 0; i < predictHistory.length; i++){
            if(predictHistory[i] == stringHistory.slice(stringHistory.length - predictHistory[i].length)){
                console.log("[Match]   : " + predictHistory[i]);
                return true;
            }
        }
        return false;
    }
    return false;
}

function getPayout(){
    if(lastPayout >= 1 && lastPayout <= 1.1){
        countStreakPayout[0] = 0;
    }
    else if(lastPayout > 1.1 && lastPayout <= 1.2){
        countStreakPayout[1] = 0;
    }
    for(var i = countStreakPayout.length-1; i >= 0; i--){
        if(countStreakPayout[i] < maxStreakPayout[i]){
            return listPayout[i];
        }
    }
    return 0
}
function exxx(){
    var middd = document.querySelectorAll("span.weight-semibold.lineHeight-normal.align-left.size-medium.variant-highlighted.numeric.with-icon-space.truncate")
    if(document.querySelectorAll("input.spacing-expanded")[1].value = "1.02"){
        document.querySelectorAll("input.spacing-expanded")[1].value = 1.01;
    }
    for(var i = 0; i < middd.length; i++){
        if(middd[i].textContent.trim().replace(",",".").replace("×","") == "1.02"){
            middd[i].textContent = "1.01×"
            console.log("OK")
        }
        
    }  
    console.log("Done")
    //span class="weight-semibold lineHeight-normal align-left size-medium variant-highlighted numeric with-icon-space truncate
}

timeStart = getTime();

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lastPayout){
        newTime = getTime();
        countStreakPayout[0] += 1;
        countStreakPayout[1] += 1;
        lastPayout = curPayout;
        historyCrash.push(handingHistory(lastPayout));
        if(historyCrash.length > maxLength){
            historyCrash = historyCrash.splice(0);
        }
        if(checkNext && lastPayout >= 1){
            if(lastPayout > payout){
                console.log("[Result]  : Win");
                profit += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                profit -= bet
                bet = bet * multiplier;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        checkNext = getNext();
        if(checkNext){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

var theShit = setInterval(doBet, 1000);
