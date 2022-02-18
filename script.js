let x=1000;
let mydiv=document.createElement("div");
mydiv.setAttribute("style","text-align:center;color:violet;");
document.body.appendChild(mydiv);
setTimeout(()=>{
   mydiv.innerHTML+=`10`;
   setTimeout(()=>{
    mydiv.style.color="red"   
    mydiv.innerHTML+=`<br>9`;
    setTimeout(()=>{
        mydiv.style.color="crimson" 
        mydiv.innerHTML+=`<br>8`;
        setTimeout(()=>{
            mydiv.style.color="orange" 
            mydiv.innerHTML+=`<br>7`;
            setTimeout(()=>{
                mydiv.style.color="yellow" 
                mydiv.innerHTML+=`<br>6`;
                setTimeout(()=>{
                    mydiv.style.color="blue" 
                    mydiv.innerHTML+=`<br>5`;
                    setTimeout(()=>{
                        mydiv.style.color="green" 
                        mydiv.innerHTML+=`<br>4`;
                        setTimeout(()=>{
                            mydiv.style.color="HotPink" 
                            mydiv.innerHTML+=`<br>3`;
                            setTimeout(()=>{
                                mydiv.style.color="pink" 
                                mydiv.innerHTML+=`<br>2`;
                                setTimeout(()=>{
                                    mydiv.style.color="green" 
                                    mydiv.innerHTML+=`<br>1`;
                                    setTimeout(()=>{
                                        
                                        mydiv.style.color="gray" 
                                        mydiv.innerHTML+="<br><br>🌟🌟Happy Independence Day 🌟🌟";
                                     },x)
                                 },x)
                             },x)
                         },x)
                     },x)
                 },x)
             },x)
         },x)
     },x)
 },x)
},x)