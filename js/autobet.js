var count = 0
var maxCount = 10
var theShit = setInterval(clickBet, 200);
function clickBet(){
    count += 1
    document.querySelector("button.variant-success.lineHeight-base.size-medium").click();
    if(count >= maxCount){
        clearInterval(theShit)
    }
}
