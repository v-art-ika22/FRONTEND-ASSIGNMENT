
const bt= document.getElementsByTagName("button")[0];
bt.addEventListener("click",function(){
    const namee= document.getElementById("name");
    const email = document.getElementById("email");
    const passs = document.getElementById("Password");
    const finall = document.getElementById("submit");
    if(namee.value===" "|| email.value===" "||passs.value===" "){
           finall.textContent="Please fill all the fields";
    }
});