const button = document.getElementById("button");
var win = document.getElementById("win");
var loss = document.getElementById("loss");
var i = 0;
var count = document.getElementById("count");
var count2 = 0;
var span2 = document.getElementById("span2");
var percent = document.getElementById("percent");
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const cards = [1,2,3];
var queen = Math.floor(Math.random() * cards.length)
var choice = Math.floor(Math.random() * cards.length)

async function start(){
    count2 = count.value;
    win.value = 0;
    loss.value = 0;
    i = 0;
    while (i != count2) {
        await sleep(20);
        var queen = Math.floor(Math.random() * cards.length)
        var choice = Math.floor(Math.random() * cards.length)
        if (choice == queen){
            win.value = parseInt(win.value)+1;
        }
        else {
            loss.value = parseInt(loss.value)+1; 
        }
        i = i+1;
        count.value = count.value-1
        percent.innerHTML = Math.round(loss.value/parseInt(i)*100)+'%';
        span2.style.width = Math.round(loss.value/parseInt(i)*100)+'%';
    } 
};