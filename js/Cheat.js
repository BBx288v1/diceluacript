// ==UserScript==
// @name Auto crash

// @namespace http://tampermonkey.net/

// @version 0.1

// @description try to take over the world!

// @author SaviorXXI

// @match https://stake.com/casino/games/crash

// @grant none

// ==/UserScript==
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}

var lppx = 0;
var timeStart = [];
var newTime = [];
var checkNext = false;
var balance = 100
var pxx = 1.2
var betttt = prompt("Nhập payout: ");
var bettttP = parseFloat(betttt);
var bettttX = (1+(parseFloat(betttt)-1)/20).toFixed(2)
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}
for(var i = 1; i < 1000000000; i++){
}
var listPayout = [1.1,1.2];
var maxStreakPayout = [20,10];
var cstph = [0,0]
var payout = listPayout[1];
var mtlli  = 2
var bet = balance/4;
var mainBet = bet;
var pxyx = 0;
var htsx = [];
var maxLength = 15;
var startB = false;
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
        var stringHistory = htsx.toString();
        stringHistory = stringHistory.split(',').join('');
        console.log("[================================]");
        notiTimeRun();
        console.log("[History] : " + stringHistory);
        console.log("[Streak]  : " + cstph.toString());
        console.log("[Profit]  : " + pxyx.toFixed(8));
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
    if(lppx >= 1 && lppx <= 1.1){
        cstph[0] = 0;
    }
    else if(lppx > 1.1 && lppx <= 1.2){
        cstph[1] = 0;
    }
    for(var i = cstph.length-1; i >= 0; i--){
        if(cstph[i] < maxStreakPayout[i]){
            return listPayout[i];
        }
    }
    return 0
}
function exxx(){
    for(var i = 1; i < 1000000000; i++){
    }
    for(var i = 1; i < 1000000000; i++){
    }
    for(var i = 1; i < 1000000000; i++){
    }
    for(var i = 1; i < 1000000000; i++){
    }
    for(var i = 1; i < 1000000000; i++){
    }
    for(var i = 1; i < 1000000000; i++){
    }
    for(var i = 1; i < 1000000000; i++){
    }
    for(var i = 1; i < 1000000000; i++){
    }
    for(var i = 1; i < 1000000000; i++){
    }
    for(var i = 1; i < 1000000000; i++){
    }
    for(var i = 1; i < 1000000000; i++){
    }
    for(var i = 1; i < 1000000000; i++){
    }
    var middd = document.querySelectorAll("span.weight-semibold.lineHeight-normal.align-left.size-medium.variant-highlighted.numeric.with-icon-space.truncate")
    if(document.querySelectorAll("input.spacing-expanded")[1].value == betttt){
        document.querySelectorAll("input.spacing-expanded")[1].value = bettttX;
    }
    for(var i = 0; i < middd.length; i++){
        if(middd[i].textContent.trim().replace(",",".").replace("×","") == betttt){
            middd[i].textContent = bettttX+"×"
            //console.log("OK")
        }
        
    }  
    //console.log("Done")
    //span class="weight-semibold lineHeight-normal align-left size-medium variant-highlighted numeric with-icon-space truncate
}

function exxx2(){
    var sttt = document.querySelector("button.variant-success.lineHeight-base.size-medium").textContent.trim()
    if(sttt == "Starting..." || sttt == "Cashout"){
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
        for(var i = 1; i < 1000000000; i++){
        }
    }
    var middd = document.querySelectorAll("span.weight-semibold.lineHeight-normal.align-left.size-medium.variant-highlighted.numeric.with-icon-space.truncate")
    if(parseFloat(document.querySelectorAll("input.spacing-expanded")[1].value) == bettttP){
        document.querySelectorAll("input.spacing-expanded")[1].value = bettttX;
    }
    try{
        var tabbb = document.querySelectorAll("span.weight-semibold.lineHeight-normal.align-left.size-medium.variant-subtle.numeric.with-icon-space")
        for(var k = tabbb.length - 10; k < tabbb.length; k++) {
            if(parseFloat(tabbb[k].textContent.trim().replace(",",".").replace("×","")) < bettttP){
                tabbb[k].textContent = " 1.00× "
                //console.log("OK")
            }
        }
    }
    catch(e){}
    try{
        for(var i = 0; i < middd.length; i++){
            if(middd[i].textContent.trim().replace(",",".").replace("×","") == betttt){
                middd[i].textContent = bettttX+"×"
                //console.log("OK")
            }
            
        }  
    }
    catch(e){}
    //console.log("Done")
    //span class="weight-semibold lineHeight-normal align-left size-medium variant-highlighted numeric with-icon-space truncate
}

function exxx3() {
    var curxPayout = 0
    var alL = document.querySelectorAll("button.lineHeight-base.size-small.spacing-normal")
    try{
        for(var j = 0; j<alL.length; j++){
            curxPayout = parseFloat(alL[j].textContent.trim().replace(",",".").replace("×",""))
            if(curxPayout < bettttP){
                alL[j].textContent = " 1.00× "
            }
        }
    }
    catch(e){}
}

timeStart = getTime();

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
}function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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

function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function dbxt() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lppx){
        newTime = getTime();
        cstph[0] += 1;
        cstph[1] += 1;
        lppx = curPayout;
        htsx.push(handingHistory(lppx));
        if(htsx.length > maxLength){
            htsx = htsx.splice(0);
        }
        if(checkNext && lppx >= 1){
            if(lppx > payout){
                console.log("[Result]  : Win");
                pxyx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pxyx -= bet
                bet = bet * mtlli;
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
function lxpr() {
    if(bettttP <= pxx){
        return true
    }
    else{
        return false;
    }
}


if(lxpr()){
    var theShit = setInterval(exxx2, 50);
    var theShit2 = setInterval(exxx3, 50);
}

