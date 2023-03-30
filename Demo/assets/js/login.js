




let errorpass=document.getElementById("errorpasss")

let emailٍSign=document.getElementById("Emailll").value;
let passSign=document.getElementById("passwordd")



let local=JSON.parse(localStorage.getItem("users")) 







function  loG(e) {
    e.preventDefault();
 
 
    
let local=JSON.parse(localStorage.getItem("users")) 

let exist =  JSON.parse(localStorage.getItem("users")).some(x =>
    x.Email == emailٍSign.value && 
    x.Password ==  passSign.value

  
    );





        // console.log(emailٍSign.value + passSign.value)
        if(!exist){

            errorpass.innerHTML =`not exist or error in password or Email <p style="color:red;">Don't have an account?<br> <a href="./index.html" style="color:red;">Sign Up</a> here</p>`
            

        }  else{
            // console.log("pppppppppppppppppp")
            window.location.href = 'file:///C:/Users/tota/Pictures/project%20js/project-js/Demo/home.html'

           
        }

        
    }

    document.querySelector('form').reset();
    // document.getElementById('emailٍSign').focus();



    // localStorage.clear()























// for(let )

// 


// namee.addEventListener( "click", function(){
//     let namelocal =  JSON.parse(localStorage.getItem('users')).some(x =>
//         x.Email == emailٍSign.value 
        
//         // console.log(x.Name)
//         );


// console.log(emailٍSign)
// for(let i=0;local.length;i++)
// {
//     if(local[i].Name == emailٍSign.value){

//        namee.innerHTML =`${local[i].Name}`

//     }

// }

// }
// )