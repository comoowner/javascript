const clock=document.querySelector("#clock");
const getTime=function(){
    const date=new Date();
    const hour=date.getHours().toString().padStart(2,"0");
    const minute=date.getMinutes().toString().padStart(2,"0");
    const second=("0"+date.getSeconds()).slice(-2)
    clock.innerText=`${hour}:${minute}:${second}`
}
getTime();
setInterval(getTime,1000)
