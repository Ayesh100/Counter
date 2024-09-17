let counterNumber = document.getElementById('counterNumber');
let count = 0;
function increase(){
    count++;
    counterNumber.textContent = count;
}
function decrease(){
    count--;
    counterNumber.textContent = count;
}
function reset(){
    count = 0;
    counterNumber.textContent = count;
}

