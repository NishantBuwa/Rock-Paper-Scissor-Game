let userScore=0
let compScore=0
const choices=document.querySelectorAll(".choice")
let para_user=document.querySelector("#user-score")
let para_comp=document.querySelector("#comp-score")
let msg=document.querySelector("#msg")



const drawGame=()=>{
    console.log("Game was Drawn")
    msg.innerText="Game was Draw"
    msg.style.backgroundColor="black"
}

const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        console.log("You Win")
        userScore++
        para_user.innerText=`${userScore}`
        msg.innerText=`You Win! ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green"
    }
    else{
        console.log("You lose")
        compScore++
        para_comp.innerText=`${compScore}`
        msg.innerText=`Better Luck Next Time! ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor="red"
    }
}

const playGame=(userchoice)=>{
    console.log("User Choice = ",userchoice)
    const compchoice=generateCompChoice()
    console.log("Comp choice = ",compchoice)
    
    if(userchoice===compchoice){
        drawGame()
    }
    else {
        let userWin=true
        if(userchoice==="rock"){
            userWin=compchoice==="paper"?false:true
        }
        else if(userchoice==="paper"){
            userWin=compchoice==="rock"?true:false
        }
        else{
            userWin=compchoice==="rock"?false:true
        }
        showWinner(userWin,userchoice,compchoice)
    }
}

const generateCompChoice=()=>{
    const options=["rock","paper","scissors"]
    const ranIdx=Math.floor(Math.random()*3)
    return options[ranIdx]
}
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        // console.log("choice was clicked",userchoice)
        playGame(userchoice)
        generateCompChoice(userchoice)
    })
})