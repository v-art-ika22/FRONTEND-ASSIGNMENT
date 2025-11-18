
const bt= document.getElementsByTagName("button")[0];
const namee= document.getElementById("name");
const email = document.getElementById("email");
const alert3 = document.getElementById("emailAlert");
const passs = document.getElementById("Password");
 const finall = document.getElementById("submit");
  const alert2 = document.getElementById("passAlert");
  namee.addEventListener("input",function(){
    if(namee.value.length>0){
       finall.textContent="";
    }
  });
email.addEventListener("input",function(){
    if(!email.value.includes('@')){
         alert3.textContent="email must have '@'";
    }
    else{
        alert3.textContent="";
    }
});
passs.addEventListener("input",function(){
    if(passs.value.length<8){
        alert2.textContent="Password must contain atleast 8 characters";
    }
    else{
         alert2.textContent="";
    }
});
bt.addEventListener("click",function(){
    const namee= document.getElementById("name");
    const email = document.getElementById("email");
    const passs = document.getElementById("Password");
  
    const alertt1 = document.getElementById("nameAlert");
    const alert2 = document.getElementById("passAlert");
    if(namee.value.trim()===""|| email.value.trim()===""||passs.value.trim()===""){
           finall.textContent="Please fill all the fields";
           alert3.textContent="";
           alert2.textContent="";
    }
    else{
        finall.textContent="";
    }
   
    
});