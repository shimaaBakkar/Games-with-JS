let nameReg=document.getElementById("username")
let passReg=document.getElementById("password")
let confirmm=document.getElementById("password1")
let emailReg=document.getElementById("Email")
let login=document.getElementById("login")



//_______________________Testing regular expration ________________________________
let testemail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
let testpass =new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{4,4}$")


let arr= [];   
//________________signup___________________________________________
login.addEventListener("click",register)

    function register(e){
        event.preventDefault();
  

        const nameval=nameReg.value;
        const passval=passReg.value;
        const emailval=emailReg.value;

        let exist = JSON.parse(localStorage.getItem("users")).some(data => 
            data.emailval == emailval 
            // data.passval == passval
          
        );
        console.log(emailval)
        if(!exist){
        
        emailtesting();
        passtesting();
        confirmpass();
        usertesting();

     
        user={
            Name:nameval,
            Password:passval,
            Email:emailval
        }


        arr.push(user)
        console.log(arr)
let json= JSON.stringify(arr);
localStorage.setItem("users",json)
    }
    else if (exist){
        alert("You have already signed up");
    }


document.getElementById('form').reset();
document.getElementById('username').focus(); 

// if(emailReg.value || passReg.value || confirmm.value || nameReg.value == "")
// {
//     event.preventDefault();
//     login.removeEventListener("click",register)
// }
    }
    //_______________________error______________________________________________________
let emailerror=document.getElementById("erroremail")
let passerror2=document.getElementById("errorpass2")
let passerror1=document.getElementById("errorpass1")
let usererror=document.getElementById("usererror")

//___________________function onblur (email,password, confirm password)_____________________________
function  emailtesting(e){
    if(!(testemail.test(emailReg.value)) || emailReg.value== "")
    {         
         login.removeEventListener("click",register)
         emailReg.style.backgroundColor="rgba(234, 70, 70, 0.497)";
        emailerror.innerHTML = "email contain @"
       
        // console.log(!(testemail.test(emailReg.value)))
        event.preventDefault();
        
    }}


function  passtesting(e){
    const x= passReg.value
   if( x.length> 4 || x.length<4 || passReg.value== "")
{            event.preventDefault();
     login.removeEventListener("click",register)
     passReg.style.backgroundColor="rgba(234, 70, 70, 0.497)";
    passerror2.innerHTML="Must be four characters";
   

    // console.log(testpass.test(passReg.value))
    // console.log(passReg.value.length)
   

   
}}

function confirmpass(){
    if((passReg.value) != (confirmm.value))
    {           event.preventDefault();
        login.removeEventListener("click",register)
        confirmm.style.backgroundColor="rgba(234, 70, 70, 0.497)";
        passerror1.innerText ="they are not the same"
    
        console.log(passReg.value + "::::"+confirmm.value)
     
       
    }else{
        login.addEventListener("click",register)
    }
}


function usertesting(){
    // console.log(nameReg.value)
    if(isFinite(nameReg.value)  ||  (nameReg.value == "" )){

        // console.log(nameReg.value)
        login.removeEventListener("click",register)
    
        nameReg.style.backgroundColor="rgba(234, 70, 70, 0.497)"
        usererror.innerHTML == "can not be null";
        event.preventDefault();
        // console.log(isFinite(nameReg.value))
    }
}

// localStorage.clear()


// /-__________________________________________________________________________________________________________________________________________


    



    // console.log(arr.Email.includes(emailvalue))

//    console.log()
//    let checkk= arr.filter(check)

//    function check() {
   
//    if(  ){


    // for(let i=0;i<localemail.length;i++)
//     {
//       localemail[i].Email 
//     }
// }

    // emailvalue = arr.Email
  


//    if()
// {

// 





  







