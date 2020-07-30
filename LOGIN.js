function valid(){
           var user=document.getElementById("na").value;
            var reg=/^[a-zA-Z]+$/;
            var res = reg.test(user);
            if (res){
                alert("username accepted");
                return true;
            }
            else{
                alert("user name not accepted");
                return false;
            }
            var pass=document.getElementById("pas").value;
            var reg=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
            
            if (! pass.match(reg)){
                alert("the password to be in 6 to 15 digits  and should having albet numeric and special char");
                return false;
            }
                else{
                    alert("password accepted");
                    return true;
                }
        }
<form action="name.html" onsubmit="return valid(),valid1()">  <h1>LOG IN</h1> 
 <h4> User Name: <input type="text"  placeholder="enter user name" required  id="na"></h4>
 <h4> Password: <input type="password" placeholder="enter password" required id="pas"></h4><br><a href="otp.html"> forgot password</button></a></br>
       <a href="final.html">  <button>SUBMIT</button></a>
    <a href="SIGNUP.html" ><button>SIGNUP</button></a>
	
<h1><center> <a href="Index.html"> HOME </a></center></h1>

	</form>

	
	
	
	
	