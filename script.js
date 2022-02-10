let name= document.querySelector('input')
let btn= document.querySelector('button')
let output=document.querySelector('#Greet')
let date= new Date()

btn.addEventListener("click",()=>{
    hour=date.getHours()
    if(hour>=6 && hour<12)
    {
        op="Good Morning"
    }
    
    else if(hour>=12 && hour<17){
       op="Good Afternoon"
    }

    else if(hour>=17 && hour<20)
    {
        op="Good Evening"
    }

    else{
        op="Good Night"
    }
    output.innerText=`HELLO ${name.value}!! ${op}`
})