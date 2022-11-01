// Database with username, password, newsfeed
    // First: create password check 

const userInfo = {
    username: "Bokhodir",
    password: "password"
}

document.getElementById("btn").onclick = function (){

     var userInfoCheck = document.getElementById("username").value;
     var userInfoCheck2 = document.getElementById("password1").value;
if(userInfoCheck == "" || userInfoCheck2== "") {
     document.getElementById('message').style.color = 'red';
     document.getElementById('message').innerHTML = 'please fill out the input';
}

else {
     if(userInfoCheck == userInfo.username && userInfoCheck2 == userInfo.password) {
          document.getElementById('message1').style.color = 'green';
          document.getElementById('message1').innerHTML = 'matching';

          document.getElementById('message').style.color = 'green';
          document.getElementById('message').innerHTML = 'matching';
          }
          else {
          document.getElementById('message1').style.color = 'red';
          document.getElementById('message1').innerHTML = 'not matching';   
          
          document.getElementById('message').style.color = 'red';
          document.getElementById('message').innerHTML = 'not matching';
          }
}


 };






