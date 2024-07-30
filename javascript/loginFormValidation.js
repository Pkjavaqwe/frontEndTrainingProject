const domUserName = document.getElementById("username")
userErrorMesgNode = document.getElementById("userError")
const dompasswordNode = document.getElementById("password")
passErrorMesgNode = document.getElementById("passError")

passError1Node = document.getElementById("passError1")
passError2Node = document.getElementById("passError2")
passError3Node = document.getElementById("passError3")
passError4Node = document.getElementById("passError4")
domUserName.addEventListener("blur", ()=>validateUserName())
const validateUserName=function(){
    userErrorMesgNode.textContent=""
    if(domUserName.value===""){
          userErrorMesgNode.textContent="username is required"
          return false
    }
    else if(domUserName.value<4){
        userErrorMesgNode.textContent="length should be greaterthan 3"
        return false
    }
    else if(/[A-Za-z ]/.test(domUserName.value)){
        return true
    }
    else{
        userErrorMesgNode.textContent="only alphabets are allowed"
        return false
    }
}

dompasswordNode.addEventListener("keyup", ()=>passwordValidation())
const passwordValidation= function(){
    passErrorMesgNode.textContent=""

   if(dompasswordNode.value===""){
    passErrorMesgNode.textContent="password required"
   }
   else if(!/[a-z]/.test(dompasswordNode.value)){
    passError1Node.textContent="notDone"
         
    }else{
         passError1Node.textContent="Done"
    }
   if(!/[A-Z]/.test(dompasswordNode.value)){
        // console.log("enteredinside first if condition")
        passError2Node.textContent="notDone"
    }
    else{
         passError2Node.textContent="Done"
    }
    if(!/[0-9]/.test(dompasswordNode.value)){
        passError3Node.textContent="notDone"
    }
    else{
        passError3Node.textContent="Done"
    } 

    if(!/[!@#\$%\^&\*\?]/.test(dompasswordNode.value)){
        passError4Node.textContent="notDone"
    }else{
        passError4Node.textContent="Done"
    }
  /*  else{
        passError1Node.textContent="Done"
        passError2Node.textContent="Done"
        passError3Node.textContent="Done"
        passError4Node.textContent="Done"
        return true
    }*/
}
