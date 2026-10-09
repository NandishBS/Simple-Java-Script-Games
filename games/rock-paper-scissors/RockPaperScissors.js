let images = document.querySelectorAll('.selectionimage')
let pchoice = ""
let cchoice = ""
let playerpoints = 0
let computerpoints = 0
let msg = document.getElementById('msg')
let playeranimationimages = document.querySelector('#playerareaimage')
let computeranimationimages = document.querySelector('#computerareaimage')
let ppointimages = document.querySelectorAll('.ppoint')
let cpointimages = document.querySelectorAll('.cpoint')

function actualwinner(){
    if(playerpoints == 3){
        msg.innerHTML="Player won &#127881;&#127882; Congrats.."
        buttondisable()
    }
    
    if(computerpoints == 3){
        msg.innerHTML = 'Player Lost &#128532; Try Again.'
        buttondisable()
    }

}


function playanimation(){
    return new Promise((resolve,reject)=>{
        msg.innerHTML= 'Player : '+pchoice+' | Computer : '+cchoice
        playeranimationimages.setAttribute('src','./playersideimages/playeranimation.gif')
        computeranimationimages.setAttribute('src','./computersideimages/computeranimation.gif')
        setTimeout(() => {
            resolve('success')
        }, 250);
    })
}

function showchoices(){
    return new Promise((resolve,reject)=>{
        msg.innerHTML= 'Player : '+pchoice+' | Computer : '+cchoice
        if(pchoice == 'rock'){
            playeranimationimages.setAttribute('src','./playersideimages/rock.png')
        }
        if(pchoice=='paper'){
            playeranimationimages.setAttribute('src','./playersideimages/paper.png')
        }
        if(pchoice=='scissor'){
            playeranimationimages.setAttribute('src','./playersideimages/scissor.png')
        }
        if(cchoice=='rock'){
            computeranimationimages.setAttribute('src','./computersideimages/rock.png')
        }
        if(cchoice=='paper'){
            computeranimationimages.setAttribute('src','./computersideimages/paper.png')
        }
        if(cchoice=='scissor'){
            computeranimationimages.setAttribute('src','./computersideimages/scissor.png')
        }


        setTimeout(() => {
            resolve('success')
        }, 1000);
    })
}


function buttondisable(){
    for(let image of images)
    {
        image.onmouseenter = ()=>{}
        image.onmouseleave = ()=>{}
        image.classList.remove('overanimation')
    }
    images[0].onclick = ()=>{}
    images[1].onclick = ()=>{}
    images[2].onclick = ()=>{}
}

function playergetsapoint(){
    return new Promise((resolve,reject)=>{
        msg.innerHTML='Player gets a point'
        updatepoints()
        playerpoints++
        setTimeout(() => {
            resolve('success')
        }, 1000);
    })
}

function computergetsapoint(){
    return new Promise((resolve,reject)=>{
        msg.innerHTML='Computer gets a point'
        updatepoints()
        computerpoints++
        setTimeout(() => {
            resolve('success')
        }, 1000);
    })
}

function itsadraw(){
    return new Promise((resolve,reject)=>{
        msg.innerHTML='Its a draw'
        setTimeout(() => {
            resolve('success')
        }, 1000);
    })
}

function updatepoints(){
    for(let i=0;i<3;i++)
    {
        if(i == playerpoints-1)
        {
            ppointimages[i].setAttribute('src','./profile/red.png')
        }
        if(i == computerpoints-1)
        {
            cpointimages[i].setAttribute('src','./profile/red.png')
        }
    }
}

async function checkwinner(){
    if(pchoice===cchoice)
    {
        await itsadraw()
    }
    else if(pchoice==='rock' && cchoice==='paper')
    {
        await computergetsapoint()

    }
    else if(pchoice==='rock' && cchoice==='scissor')
    {
        await playergetsapoint()
    }
    else if(pchoice==='paper' && cchoice==='rock')
    {
        await playergetsapoint()
    }
    else if(pchoice==='paper' && cchoice==='scissor')
    {
        await computergetsapoint()
    }
    else if(pchoice==='scissor' && cchoice==='rock')
    {
        await computergetsapoint()
    }
    else if(pchoice==='scissor' && cchoice==='paper')
    {
        await playergetsapoint()
    }
    updatepoints()
    msg.innerHTML='Select your Choice'
}

function getcomputerchoice(){
    let x = parseInt(Math.random() * 3)
    if(x==0){
        cchoice = 'rock'
    }
    else if(x==1){
        cchoice = 'paper'
    }
    else if(x==2){
        cchoice='scissor'
    }
}

async function callanimation(){
    buttondisable()
    await playanimation()
    await showchoices()
    await checkwinner()
    buttonenable()
    actualwinner()
}

function buttonenable(){
    for(let image of images)
    {
        image.onmouseenter = ()=>{
            image.classList.add('overanimation')
        }
        image.onmouseleave = ()=>{
            image.classList.remove('overanimation')
        }

    }

    images[0].onclick = ()=>{
        pchoice = "rock"
        getcomputerchoice()
        callanimation()
    }

    images[1].onclick = ()=>{
        pchoice = "paper"
        getcomputerchoice()
        callanimation()
    }

    images[2].onclick = ()=>{
        pchoice = "scissor"
        getcomputerchoice()
        callanimation()
    }
}


msg.innerHTML = 'Select Your Choice'
buttonenable()








