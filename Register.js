function verify(){  
    var email=document.myform.email.value;  
    var psw=document.myform.psw.value;  
    var pswd=document.myform.pswd.value;  
    console.log(email);
    console.log(psw);
    console.log(pswd);  
    if (email==null || email==""){  
       alert("Email can't be blank");  
       return false; 
    }else if(psw != pswd){  
       alert("Passwords doesnt match...Please check");  
       return false;
    }else{
        return true;
    }
  }


<form name="myform" method="POST" action="login.html" onsubmit="return verify()"> between Line 38 and 40
<script src="Register.js"></script> Line 13 before </head>
