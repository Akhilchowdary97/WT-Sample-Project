function valid()
	{
		var name=document.getElementById('Firstname').value;
		var namepattern=/^[a-zA-Z]*$/;
		if(name == '')
		{
			alert("Enter User name...");
			return false;
		}
		else if(name==namepattern)
		{
			alert("valid Frist name");
			return true;
		}
		else{
		     alert("Invalid First name...");
			return false;
		}
		var name1=document.getElementById('Lastname').value;
		var namepattern1=/^[a-zA-Z]*$/;
		if(name1 == '')
		{
			alert("Enter last name...");
			return false;
		}
		else if(name1==namepattern1)
		{
			alert("valid Last name");
			return true;
		}
		else{
		     alert("Invalid Last name...");
			return false;
		}
		var phone=document.getElementById('PhoneNumber').value;
		 var phonepattern = /^\(?([6|7|8|9])\)?([0-9]{9})$/;
		if(phone == '')
		{
			alert("Enter Phone number");
			return false;
		}
		else if(phone==phonepattern)
		{
			alert("valid phone number");
			return true;
		}
		else{
		     alert("Invalid phone number...");
			return false;
		}
	    var	email=document.getElementById('E-mail').value;
		var emailpattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})*$/;
		
		 if(!email.match(emailpattern)){
                    alert("consist with uppercase and special characters & numbers ")
                    return false
                }
                else{
                    alert("password accepted")
                    return true
            }
         var cemail = document.getElementById("cE-mail").value;
         if(email==cE-mail){
            alert("E-mail accepted")
                return true
         }
         else{
            alert("E-mail not matched")
           return false
        }
         var pass = document.getElementById("pw").value;
		 var reg = /^[\A-Za-z0-9@#$%]{8}$/;
		 if(!pass.match(reg)){
                    alert("consist with uppercase and special characters &length should be 8 ")
                    return false
                }
                else{
                    alert("password accepted")
                    return true
				}
         var cpass = document.getElementById("cpw").value;
         if(pass==cpass){
            alert("password accepted")
                return true
         }
         else{
            alert("password not matched")
           return false
        }
    }
<body background-image:url(logo.JPG)>
   
    <h1 align="center"><b><u>SIGNUP</u></b></h1>
       
   
<p><b>
<form action = "LOGIN.HTML" onsubmit="return valid()">
First name :<input type="text" placeholder="Enter   first name" required > 
Last name :<input type="text" placeholder="Enter last name" required > <br>
contact :<input type="number"  placeholder="Enter number" required > 
DOB :<input type="date"><br>  
mail:<input type="email" placeholder="Enter your mail" required id='E-mail'  >
confirm mail:<input type="email" placeholder="confirm your mail"  required id="cE-mail"> <br>
password:<input type="password" placeholder="Enter your password" required id="pw"> 
confirm password:<input type="password" placeholder="confirm your password"  required id='cpw'><br><br><br>
    
	 <center><button align="center">Submit</button></center></a><br>
    
	<div>
<h1><center> <a href="Index.html"> HOME </a></center></h1>
</div>
    
    </b>


</p>
</form>

</body>