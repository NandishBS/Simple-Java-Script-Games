let tiles;
let box = document.querySelector("#box")
let tilesposition=[]
let click = true;
const MOVE_DURATION = 500;
let moveQueue = [];
let isAnimating = false;
let logicalTilePositions = [];
let logicalBlankPosition;
let congrats = document.querySelector("#congrats");
congrats.remove();
let developer = document.querySelector("#developer")
function assign_positions(){
    for(let i=1;i<=8;i++){
        while(true){
            let n = parseInt(Math.random()*8);
            if(tilesposition.includes(n)){
                continue;
            }
            else{
                tilesposition.push(n)
                break;
            }
        }
    }
}
function insert_all_tiles(){
    for(let i=0;i<8;i++){
        let pos = tilesposition[i]
        let element = document.createElement('div')
        element.setAttribute('class','tiles')
        element.setAttribute('id',`tile${i+1}`)
        element.innerText = pos+1;
        box.appendChild(element)
    }

    let element = document.createElement('div')
    element.setAttribute('class','tiles')
    element.classList.add('blank')
    element.setAttribute('id','tile9')
    element.innerText = '';
    box.appendChild(element)

    tiles = document.querySelectorAll('.tiles')
    tilesposition.push(-1)
}
function check_right_or_wrong(){
    for(let i=0;i<9;i++){
        if(tiles[i].id == `tile${tiles[i].innerText}`){
            tiles[i].classList.add("right")
            tiles[i].classList.remove("wrong")
        }
        else{
            tiles[i].classList.add("wrong")
            tiles[i].classList.remove("right")
        }
    }
}
function check_left(i){
    if(i==0 || i==3 || i==6){
        return false;
    }
    else if(tiles[i-1].innerText == ''){
        return true;
    }
    else{
        return false;
    }
}
function check_right(i){
    if(i==2 || i==5 || i==8){
        return false;
    }
    else if(tiles[i+1].innerText == ''){
        return true;
    }
    else{
        return false;
    }
}
function check_top(i){
    if(i==0 || i==1 || i==2){
        return false;
    }
    else if(tiles[i-3].innerText == ''){
        return true;
    }
    else{
        return false;
    }
}
function check_bottom(i){
    if(i==6 || i==7 || i==8){
        return false;
    }
    else if(tiles[i+3].innerText == ''){
        return true;
    }
    else{
        return false;
    }
}
function is_adjacent(firstPosition, secondPosition){
    const firstRow = Math.floor(firstPosition / 3);
    const firstColumn = firstPosition % 3;
    const secondRow = Math.floor(secondPosition / 3);
    const secondColumn = secondPosition % 3;
    return Math.abs(firstRow - secondRow) + Math.abs(firstColumn - secondColumn) == 1;
}
function initialise_logical_positions(){
    logicalTilePositions = Array(8).fill(-1);
    for(let position=0;position<9;position++){
        const value = parseInt(tiles[position].innerText);
        if(Number.isNaN(value)){
            logicalBlankPosition = position;
        }
        else{
            logicalTilePositions[value - 1] = position;
        }
    }
}
function complete_move(move, movingTile, blankTile){
    movingTile.classList.remove("animation");

    const temporaryId = movingTile.id;
    movingTile.id = blankTile.id;
    blankTile.id = temporaryId;

    movingTile.classList.add("blank");
    blankTile.classList.remove("blank");

    const temporaryText = movingTile.innerText;
    movingTile.innerText = blankTile.innerText;
    blankTile.innerText = temporaryText;
    check_right_or_wrong();

    isAnimating = false;
    if(check_for_win()){
        click = false;
        moveQueue = [];
        setTimeout(() => {
            developer.before(congrats)
        }, 400);
    }
    else{
        process_move_queue();
    }
}
function process_move_queue(){
    if(isAnimating || !click || moveQueue.length == 0){
        return;
    }

    isAnimating = true;
    const move = moveQueue.shift();
    const movingTile = Array.from(tiles).find(tile => tile.innerText == String(move.value));
    const blankTile = Array.from(tiles).find(tile => tile.innerText == '');

    if(!movingTile || !blankTile){
        isAnimating = false;
        return;
    }

    movingTile.classList.add("animation");
    const temporaryId = movingTile.id;
    movingTile.id = blankTile.id;
    blankTile.id = temporaryId;

    setTimeout(() => complete_move(move, movingTile, blankTile), MOVE_DURATION);
}
function queue_move(tile){
    if(!click){
        return;
    }

    const value = parseInt(tile.innerText);
    if(Number.isNaN(value)){
        return;
    }

    const from = logicalTilePositions[value - 1];
    if(!is_adjacent(from, logicalBlankPosition)){
        return;
    }

    moveQueue.push({ value, from, to: logicalBlankPosition });
    logicalTilePositions[value - 1] = logicalBlankPosition;
    logicalBlankPosition = from;
    process_move_queue();
}
function is_solvable(){
    let sum =0;
    for(let i =0;i<7;i++){
        let count = 0;
        for(let j=i+1;j<8;j++){
            if(tilesposition[j] > tilesposition[i])
            {
                count++
            }
        }
        sum = sum + count;
    }
    if(sum%2==0){
        return true;
    }
    else{
        return false
    }
}
function check_for_win(){
    for(let tile of tiles){
        if(tile.innerText=='')
        {
            continue;
        }
        else if(tile.id != `tile${tile.innerText}`)
        {
            return false;
        }
    }
    return true;
}
function click_enable(){
    for(let tile of tiles){
        tile.addEventListener("click",()=>{
            queue_move(tile);
        })
    } 
}



assign_positions()
if(is_solvable()){
    insert_all_tiles()
}
else{
    window.location.reload()
}
initialise_logical_positions()
check_right_or_wrong()
if(check_for_win()){
    click = false;
    setTimeout(() => {
        developer.before(congrats)
    }, 400);
}
click_enable()

    
   



