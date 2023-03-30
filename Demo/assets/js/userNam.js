

var userName;
function user(){
var userss=JSON.parse(localStorage.getItem("users"))

for(var i=0 ;i<userss.length;i++)
{
   userName=userss[i].Name;
  
}

var viewname=document.getElementById("username")
viewname.innerHTML= userName;
console.log(userName)
}

user()
