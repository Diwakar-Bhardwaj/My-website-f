let btn=document.querySelectorAll(".btn");
let string="";
document.querySelector('input').disabled=true;
btn.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        
        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="C"){
             string="";
             document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            let n=string.length;
            console.log(n);
            string=string.slice(0,n-1);
            document.querySelector('input').value=string;
        }
        else{
            string=string+ e.target.innerHTML;
            console.log(string);
            document.querySelector('input').value=string;
           
        }
});
});