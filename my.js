function moveUp() {
    let topCurrentTank =  parseInt(document.getElementById('tank').style.top);
    document.getElementById('tank').style.top = topCurrentTank - 19 + "px"
    explosion()
}

function moveLeft() {
    let leftCurrentTank =  parseInt(document.getElementById('tank').style.left);
    document.getElementById('tank').style.left = leftCurrentTank - 19 + "px"
    explosion()
}


function moveDown() {
    let downCurrentTank =  parseInt(document.getElementById('tank').style.top);
    document.getElementById('tank').style.top = downCurrentTank + 19 + "px"
    explosion()
}


function moveRight() {
    let rightCurrentTank =  parseInt(document.getElementById('tank').style.left);
    document.getElementById('tank').style.left = rightCurrentTank + 19 + "px"
    explosion()
}
function explosion(){
    let topCurrentTank =  parseInt(document.getElementById('tank').style.top);
    let leftCurrentTank =  parseInt(document.getElementById('tank').style.left);
    let topCurrentboom =  parseInt(document.getElementById('boom').style.top);
    let leftCurrentboom =  parseInt(document.getElementById('boom').style.left);
    console.log(topCurrentTank , leftCurrentTank , topCurrentboom , leftCurrentboom);
    if(topCurrentTank==topCurrentboom && leftCurrentTank==leftCurrentboom){
        document.getElementById('tank').style.backgroundImage = "url('explosion.png')";
    }
   
}