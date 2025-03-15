let ul=document.querySelector("#block");
let checkbtn=document.querySelector("#checkbtn");
let t=0;

checkbtn.addEventListener("click",()=>{
    if(t===1){
        t=0;
        // ul.style.position="absolute";
    ul.style.right="-50%";
    
    }
    else{
        t=1;
        ul.style.right="0px";
    }
    console.log(t);
})



