let text = document.querySelector('#msg')
let tiles = document.querySelectorAll('.tiles')

let player = 'O'

for(let tile of tiles){
    tile.value = true
    tile.innerHTML = ' '
}

let winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const disableallbuttons = ()=>
{
    for(let tile of tiles)
    {
        tile.value = false
    }
}

const checkwinner = ()=>{
    for(let pattern of winpattern){
        let t1 = pattern[0]
        let t2 = pattern[1]
        let t3 = pattern[2]

        if(tiles[t1].innerText == 'O' && tiles[t2].innerText == 'O' && tiles[t3].innerText == 'O')
        {
            text.innerHTML="Congrats.. winner is player O"
            text.className = 'makegreen'
            disableallbuttons()
            tiles[t1].classList.add('winnergreen')
            tiles[t2].classList.add('winnergreen')
            tiles[t3].classList.add('winnergreen')
        }

        if(tiles[t1].innerText == 'X' && tiles[t2].innerText == 'X' && tiles[t3].innerText == 'X')
        {
            text.innerHTML="Congrats.. winner is player X"
            text.className = 'makered'
            disableallbuttons()
            tiles[t1].classList.add('winnerred')
            tiles[t2].classList.add('winnerred')
            tiles[t3].classList.add('winnerred')
        }
    }
}

const checkdraw = () => {
    for(let tile of tiles)
    {
        if(tile.value == true)
        {
            return   
        } 
    }
    text.innerHTML='The match is draw..'
    text.className = 'none'
}

for(let tile of tiles){
    tile.onclick = ()=>{
        if(tile.value)
        {
            tile.value = false
            if(player == 'O')
            {
                tile.classList.add("ifO")
                tile.classList.remove('ifX')
                tile.innerHTML = 'O'
                text.innerHTML = "Player X's turn." 
                text.className = 'makered'
                player = 'X'
            }
            else{
                tile.classList.add("ifX")
                tile.classList.remove('ifO')
                tile.innerHTML = 'X'
                text.innerHTML = "Player O's turn."
                text.className = 'makegreen'
                player = 'O'
            }
        }
        checkdraw()
        checkwinner()
    }
}