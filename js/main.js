 
 var message=document.getElementById('result');
//  var messages=document.getElementById('results');
 var userInput=document.getElementById('userInput');
 var emailInput=document.getElementById('emailInput');
 var passwordInput=document.getElementById('passwordInput');
 var userslist=[];




if(localStorage.getItem('userData')!= null){
  userslist= JSON.parse(localStorage.getItem('userData'));
  console.log(userslist);
}  


function Register(){

if(userInput.value==''||emailInput.value==''||passwordInput.value==''){
  // message.classList.remove('d-none')
  document.getElementById('result').innerHTML='all inputs are required*'
  message.classList.remove('d-none')
  // document.getElementById('result').innerHTML=`<p>all inputs are required</p>`
  console.log('helloo');
}
else if(passwordInput.value.length<8){
  document.getElementById('result').innerHTML='Password should have at least 8 character*'
  message.classList.remove('d-none')
}
 else{
  var user={
    username:userInput.value,
    email:emailInput.value,
    password:passwordInput.value
  }

  if(isExist()==true){
    document.getElementById('result').innerHTML='This Email  Already Exists'
    message.classList.remove('d-none')
  }
  else{
  userslist.push(user);
  window.location='./login.html'
  // location.href='login.html'
  var x=JSON.stringify(userslist)
  console.log(x);
  localStorage.setItem('userData',x)
}
}
}

function isExist(){
  for(var i=0;i<userslist.length;i++){
    if(userslist[i].email==emailInput.value){
      return true;
    }
  }
  }


//////////////////login/////////////////////



var logemail=document.getElementById('logemail');
var logpass=document.getElementById('logpass');
var userlog=[];
 var messages=document.getElementById('results');
 
 userlog=JSON.parse(localStorage.getItem('userData'))

function checkvalid(){
 for(var i=0;i<userlog.length;i++){
if(logemail.value==userlog[i].email&&logpass.value==userlog[i].password){
var z=userlog[i].username;
console.log(z);
localStorage.setItem('name',z)
window.location='./homePage.html'

break;
}
else if(logemail.value!=userlog[i].email||logpass.value!=userlog[i].password){
  document.getElementById('results').innerHTML='Not valid account*'
  messages.classList.remove('d-none')
}
 }
}




function login(){
  if(logemail.value==''||logpass==''){
    document.getElementById('results').innerHTML='all inputs are required*'
    messages.classList.remove('d-none')
  }
  else{
    checkvalid();
  }
}






////////////homepage

// document.getElementById('usname').innerHTML= localStorage.getItem('name');
let welcome=document.getElementById('welcome');
if(localStorage.getItem('name') != null){
  welcome.innerHTML=`Welcome ${localStorage.getItem('name')}`
}


  function logout(){
  window.location.href='index.html'
  localStorage.removeItem('name');
}












//  function validation(){
 
//   if(document.Formfill.username.value==""||document.Formfill.email.value==""||document.Formfill.password.value==""){
//     document.getElementById('result').innerHTML="All inputs is required*";
//     message.classList.remove('d-none');
//     // message.classList.remove('d-block');

//     return false;
//   }
//    else if(document.Formfill.username.value.length <6){
//     document.getElementById('result').innerHTML=" Username at least 6 letters*";
//     message.classList.remove('d-none');
//     // message.classList.remove('d-block');
//     return false;
//   }
  
//   else if(document.Formfill.password.value.length<8){
//     document.getElementById('result').innerHTML="Password should have at least 8 character*";
//     message.classList.remove('d-none');
//     // message.classList.remove('d-block');
//     return false;
//   }
// else if(document.Formfill.username.value==""||document.Formfill.email.value==""||document.Formfill.password.value==""&&
// document.Formfill.username.value.length <6&&document.Formfill.password.value.length<8){
//   document.getElementById('result').innerHTML="Registration done";
//     message.classList.remove('d-none');
//     return true;
// }


//  }












//  function checkDb(){
//   if(localStorage.getItem("userlist")!=null){
//     users=JSON.parse(localStorage.getItem("userlist"));
//     return true;
//   }
// }
// function signIN(){
//   var email=emailInput.value;
//   var password=passwordInput.value;
//  if(checkDb()){
//   for(var i=0;i<users.length;i++){
//   if(email==users[i].email&& password==users[i].password)
//   console.log('correct');
// var name=users[i].name;
// localStorage.setItem("Name", name);

//   }
//  }
// }