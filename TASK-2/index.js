const feed = document.getElementById("feedback");
const chars = document.getElementById("charsleft");
let limit=100;
feed.addEventListener("input",function(){
     
   if(feed.value.length>limit){
    feed.value= feed.value.substring(0,limit);
   }
   if(feed.value.length<50){
    chars.style.color="green";
   }
   else if(feed.value.length>=50&&feed.value.length<=85){
    chars.style.color="yellow";
   }
   else{
    chars.style.color="red";
   }
     

     
    const left = limit-feed.value.length;
    chars.textContent= left+ " "+"Characters left";
     
});