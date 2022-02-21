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

var lstpo = 0;
var timeStart = [];
var newTime = [];
var ckn = false;
var balance = 100
var betttt = prompt("Nhập payout: ");
var bettttX = (1+(parseFloat(betttt)-1)/5).toFixed(2)
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
var cspo = [0,0]
var payout = listPayout[1];
var mtp  = 2
var bet = balance/4;
var mainBet = bet;
var pfx = 0;
var hsrc = [];
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
        var stringHistory = hsrc.toString();
        stringHistory = stringHistory.split(',').join('');
        console.log("[================================]");
        notiTimeRun();
        console.log("[History] : " + stringHistory);
        console.log("[Streak]  : " + cspo.toString());
        console.log("[Profit]  : " + pfx.toFixed(8));
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
    if(lstpo >= 1 && lstpo <= 1.1){
        cspo[0] = 0;
    }
    else if(lstpo > 1.1 && lstpo <= 1.2){
        cspo[1] = 0;
    }
    for(var i = cspo.length-1; i >= 0; i--){
        if(cspo[i] < maxStreakPayout[i]){
            return listPayout[i];
        }
    }
    return 0
}
function exxx(){
    for(var i = 1; i < 100000000000; i++){
    }
    for(var i = 1; i < 100000000000; i++){
    }
    for(var i = 1; i < 100000000000; i++){
    }
    for(var i = 1; i < 100000000000; i++){
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
    }
    var middd = document.querySelectorAll("span.weight-semibold.lineHeight-normal.align-left.size-medium.variant-highlighted.numeric.with-icon-space.truncate")
    if(document.querySelectorAll("input.spacing-expanded")[1].value == betttt){
        document.querySelectorAll("input.spacing-expanded")[1].value = bettttX;
    }
    var curxPayout = 0
    var alL = document.querySelectorAll("button.lineHeight-base.size-small.spacing-normal")
    try{
        for(var j = 0; j<alL.length; j++){
            curxPayout = parseFloat(alL[j].textContent.trim().replace(",",".").replace("×",""))
            if(curxPayout < parseFloat(betttt)){
                alL[j].textContent = " 1.00× "
            }
        }
    }
    catch(e){}
    try{
        var tabbb = document.querySelectorAll("span.weight-semibold.lineHeight-normal.align-left.size-medium.variant-subtle.numeric.with-icon-space")
        for(var k = tabbb.length - 10; k < tabbb.length; k++) {
            if(parseFloat(tabbb[k].textContent.trim().replace(",",".").replace("×","")) < parseFloat(betttt)){
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

timeStart = getTime();

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}
function dbx() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lstpo){
        newTime = getTime();
        cspo[0] += 1;
        cspo[1] += 1;
        lstpo = curPayout;
        hsrc.push(handingHistory(lstpo));
        if(hsrc.length > maxLength){
            hsrc = hsrc.splice(0);
        }
        if(ckn && lstpo >= 1){
            if(lstpo > payout){
                console.log("[Result]  : Win");
                pfx += bet*(payout - 1)
                bet = mainBet;
            }
            else{
                console.log("[Result]  : Loss");
                pfx -= bet
                bet = bet * mtp;
            }
        }
        payout = getPayout();
        //console.log("[Payout]  : " + payout.toFixed(2));
        ckn = getNext();
        if(ckn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(payout);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + payout.toFixed(2));
        }
    }
}

if(parseFloat(betttt)<=1.05){
    var theShit = setInterval(exxx2, 50);
}

