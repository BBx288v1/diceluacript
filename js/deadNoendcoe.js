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

var lp = 0;
var ts = [];
var nt = [];
var cn = false;
var bl = 100
document.querySelectorAll("input.spacing-expanded")[1].value = (1 + parseFloat(document.querySelectorAll("input.spacing-expanded")[1].value)/2).toFixed(2)
var b4t = prompt("Nhập po: ");
var b4tX = (1+(parseFloat(b4t)-1)/5).toFixed(2)

var lp2 = [1.1,1.2];
var msp = [20,10];
var csp = [0,0]
var po = lp2[1];
var mlp  = 2
var bet = bl/4;
var MBB = bet;
var pf = 0
var hsrC = [];
var MLS = 15
var prdH =[]
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
    var sc = nt[2]-ts[2]
    var min = nt[1]-ts[1]
    var hou = nt[0]-ts[0]
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

function sendPayout(poValue){
    document.querySelectorAll("input.spacing-expanded")[1].click()
    sleep(500)
    document.querySelectorAll("input.spacing-expanded")[1].value = poValue;
}

function handingHistory(prdH){
    if(prdH >= 1 && prdH < 2){
        return "R"
    }
    else if(prdH >= 2 && prdH < 10){
        return "G"
    }
    else if(prdH >= 10){
        //return "Y"
        return "G"
    }
}

function getNext(){
    if(po > 0){
        var stringHistory = hsrC.toString();
        stringHistory = stringHistory.split(',').join('');
        console.log("[================================]");
        notiTimeRun();
        console.log("[History] : " + stringHistory);
        console.log("[Streak]  : " + csp.toString());
        console.log("[Profit]  : " + pf.toFixed(8));
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
    if(lp >= 1 && lp <= 1.1){
        csp[0] = 0;
    }
    else if(lp > 1.1 && lp <= 1.2){
        csp[1] = 0;
    }
    for(var i = csp.length-1; i >= 0; i--){
        if(csp[i] < msp[i]){
            return lp2[i];
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
    if(document.querySelectorAll("input.spacing-expanded")[1].value == b4t){
        document.querySelectorAll("input.spacing-expanded")[1].value = b4tX;
    }
    for(var i = 0; i < middd.length; i++){
        if(middd[i].textContent.trim().replace(",",".").replace("×","") == b4t){
            middd[i].textContent = b4tX+"×"
            //console.log("OK")
        }
        
    }  
    //console.log("Done")
    //span class="weight-semibold lineHeight-normal align-left size-medium variant-highlighted numeric with-icon-space truncate
}

function exxx2(){
    var middd = document.querySelectorAll("span.weight-semibold.lineHeight-normal.align-left.size-medium.variant-highlighted.numeric.with-icon-space.truncate")
    if(document.querySelectorAll("input.spacing-expanded")[1].value == b4t){
        document.querySelectorAll("input.spacing-expanded")[1].value = b4tX;
    }
    for(var i = 0; i < middd.length; i++){
        if(middd[i].textContent.trim().replace(",",".").replace("×","") == b4t){
            middd[i].textContent = b4tX+"×"
            //console.log("OK")
        }
        
    }  
    //console.log("Done")
    //span class="weight-semibold lineHeight-normal align-left size-medium variant-highlighted numeric with-icon-space truncate
}

ts = getTime();

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}

function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}
function doBet() {
    var curPayout = parseFloat(document.querySelector("button.lineHeight-base.size-small.spacing-normal").textContent.trim().replace(",",".").replace("×",""))
    if(curPayout != lp){
        nt = getTime();
        csp[0] += 1;
        csp[1] += 1;
        lp = curPayout;
        hsrC.push(handingHistory(lp));
        if(hsrC.length > MLS){
            hsrC = hsrC.splice(0);
        }
        if(cn && lp >= 1){
            if(lp > po){
                console.log("[Result]  : Win");
                pf += bet*(po - 1)
                bet = MBB;
            }
            else{
                console.log("[Result]  : Loss");
                pf -= bet
                bet = bet * mlp;
            }
        }
        po = getPayout();
        //console.log("[Payout]  : " + po.toFixed(2));
        cn = getNext();
        if(cn){
            sleep(1000)
            sendBet(bet.toFixed(8));
            sleep(500)
            sendPayout(po);
            sleep(1000)
            clickBet();
            console.log("[Bet]     : " + bet.toFixed(8));
            console.log("[Payout]  : " + po.toFixed(2));
        }
    }
}


var theShit = setInterval(exxx, 1000);
