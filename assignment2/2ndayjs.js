

//input from user by using prompt and email and pass
function login(){
const email = prompt("Enter your email");
const password = prompt("enter your password");


    
if(password == 1234 & email == "vaish@gmail.com"){
    alert("successfully login")
}
else{
   login();
}
}
login();