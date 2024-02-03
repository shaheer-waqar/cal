displayInp = document.getElementById("display-inp");

function getVal(val){
    displayInp.value += val;
}
function calculate(){
    displayInp.value = eval(displayInp.value);
    
    if (displayInp.val){
        alert("enter a value first")
    }
}
function clearAll(){
    displayInp.value = "";
}