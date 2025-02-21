let choice=document.querySelectorAll(".choice");
let msg=document.querySelector("#message");
let userpara=document.querySelector("#user");
let comppara=document.querySelector("#comp");
let userscore=0;
let compscore=0;
choice.forEach((divs) => {
  divs.addEventListener("click",()=>{
    const userchoice = divs.getAttribute("id");
    // console.log(userchoice);
    gamePlay(userchoice);
    // console.log("computer generate=", compGenerate());
  });   
});

const compGenerate=()=>{
    let option=["paper","rock" , "scissor"];
    let rndIdx=Math.floor(Math.random()*3);
    return option[rndIdx];
}

  const gamePlay=(userchoice)=>{

  const compchoice=compGenerate();
  
    console.log(userchoice, "and",compchoice);
    if(userchoice===compchoice){
      console.log("Draw");
      msg.innerHTML="Draw";
    }
    else{
      let userwin=true;
     if(userchoice==="rock"){
      // paper scissor
      userwin=compchoice==="paper" ? false:true;
      
     }
     else if(userchoice==="paper"){
      // rock scissor
      userwin=compchoice==="scissor"?true:false;
     }
     else{
      userwin=compchoice==="paper"?true:false;
     }
      showWinner(userwin);
    } 
};

  const showWinner=(userwin)=>{
    console.log(userwin);
    if(userwin){
      console.log("you win!");
      msg.innerHTML="you win!";
      userscore++;
      userpara.innerHTML=userscore;

    }
    else{
      console.log("you loss");
      msg.innerHTML="You loss";
      compscore++;
      comppara.innerHTML=compscore;
    }
  }


