// Database with username, password, newsfeed
    // First: create password check 

const userInfo = {
    username: "Bokhodir",
    password: "password"
               };
/*
document.getElementById("btn").onclick = function (){

     var userInfoCheck = document.getElementById("username").value;
     var userInfoCheck2 = document.getElementById("password1").value;
if(userInfoCheck == "" || userInfoCheck2== "") {
     document.getElementById('message').style.color = 'red';
     document.getElementById('message').innerHTML = 'please fill out the input';
}

else {
     if(userInfoCheck == userInfo.username && userInfoCheck2 == userInfo.password) {
          document.getElementById('message').style.color = 'green';
          document.getElementById('message').innerHTML = 'matching';
          }
          else {
          
          document.getElementById('message').style.color = 'red';
          document.getElementById('message').innerHTML = 'not matching';
          }
}

 };
 */

// checking from database user's ID and matching it with its password

var  userInfo2 = [
     {
          userName    : "Bokhodir",
          userPassword: "password"
     },
     {
          userName    : "Xaru",
          userPassword: "pastorama"
     },
     {
          userName    : "Roma",
          userPassword: "roma"
     },
     {
          userName    : "xyz",
          userPassword: "xyz"
     }
];


//1st way of checking UserInput from Database

document.getElementById("btn").onclick = function() {
     var userInformationLook = document.getElementById("username").value;
     var userPasswordLook    = document.getElementById("password1").value;

          // userInfo2 array > some() method looks for userName and 
          //                   string attached to it from object and matches 
          //                   it with input text

         if(userInfo2.some(x => x.userName === userInformationLook)){

                    if(userInfo2.some(x =>x.userPassword === userPasswordLook)){
                         document.getElementById('message').style.color = 'green';
                         document.getElementById('message').innerHTML = 'matching';  
                    }   
                    else {
                         document.getElementById('message').style.color = 'red';
                         document.getElementById('message').innerHTML = 'not matching';
                    };           
               }
          else if (userInformationLook === "" && userPasswordLook ==="") {
                    document.getElementById('message').style.color = 'red';
                    document.getElementById('message').innerHTML = 'please fill-out input field'
                    }
          else {
               document.getElementById('message').style.color = 'red';
               document.getElementById('message').innerHTML = 'not matching';
               };           
};



//2nd way of checking UserInput from Database

/*
document.getElementById("btn").onclick = function(){
     var userInformationLook = document.getElementById("username").value;
     var userPasswordLook    = document.getElementById("password1").value;

     function isUserValid(userInformationLook, userPasswordLook) {
          for(var i = 0; i<userInfo2.length; i++){
               if(userInfo2[i].userName === userInformationLook 
                    &&
                    userInfo2[i].userPassword == userPasswordLook){
                         return true;
                    }
                                                  }
               return false;
                                                   };
          function signIn(userInformationLook, userPasswordLook){
               if(isUserValid(userInformationLook, userPasswordLook)){
                    document.getElementById('message').style.color = 'green';
                    document.getElementById('message').innerHTML = 'matching';   
               }
               else {
                    console.log("error");
               }
          }

          signIn(userInformationLook, userPasswordLook);
};
*/

/*
let name = ["sponge", "good", "varry", "varry"];

name.forEach(capital);
name.forEach(print);

function capital(element, index, array){
  array[index] = element[0].toUpperCase() + element.substring(1)
}

function print(element){
    console.log(element)
}
*/
//-----------------------------------------------------------------------------
var a = [];
var p = "";
document.getElementById("submit").onclick = function(){
   
     var str =  document.getElementById("textField").value;

     a = str.split(" ");
     console.log(a);
     
     const stringsSet = new Set(a);
     const uniqueStrings = [querySelectorAll(...stringsSet)];
     console.log(uniqueStrings);
          

          p = a.join();
          p = p.replaceAll(",", " ");
          console.log(p);
     
          document.getElementById("myLabel").innerHTML = a;
}
