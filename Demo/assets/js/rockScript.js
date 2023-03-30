var computerChoiceDisplay = document.getElementById("computer-choice");
var userChoiceDisplay = document.getElementById("user-choice");
var result = document.getElementById("result");
var choices = document.querySelectorAll("button");
console.log(choices);
var userChoice;
var computerChoice
var userCount=0;
var computerCount=0;


choices.forEach(choices => choices.addEventListener("click",function(e){
    
    // userChoice =e.target.id;
    userChoice= e.target.innerText;
    console.log(userChoice);
    // console.log(e.target.innerText);
    userChoiceDisplay.innerText=userChoice;
    generateComputerChoice();
    Result();
   
    setInLocalStorage();
    // setTimeout(function(){location.reload()},3000)
    anotherTry();
    ////////for test/////////////////
    // if(userChoiceDisplay.innerText=="Scissors"&&computerChoiceDisplay.innerText=="Paper"){
    //     console.log("yes");
    // }
   
 
           
    
}) )

function generateComputerChoice(){
    var randomNumber=Math.floor( Math.random()* 3) +1; //or we can use the number of Choices((choices.length))(3)//
    console.log(randomNumber);
    if(randomNumber===1){
        computerChoice="Paper";
    }
    if(randomNumber===2){
        computerChoice="Rock";
    }
    if(randomNumber===3){
        computerChoice="Scissors";
    }
    computerChoiceDisplay.innerText=computerChoice;


}
var clap=document.getElementById("clap");
var userCounter=document.getElementById("user-counter");
var computerCounter=document.getElementById("computer-counter");

function Result(){

    if (userChoiceDisplay.innerText=="Rock"&&computerChoiceDisplay.innerText=="Scissors"){
        userCount ++;
        userCounter.innerText=userCount;
           result.innerText="Congrats You Won"
           clap.play();

    }
   else if (userChoiceDisplay.innerText=="Scissors"&&computerChoiceDisplay.innerText=="Paper"){
       userCount ++;
       userCounter.innerText=userCount;
        result.innerText="Congrats You Won"
        clap.play();
    }
   else if (userChoiceDisplay.innerText=="Paper"&&computerChoiceDisplay.innerText=="Rock"){
       userCount ++;
       userCounter.innerText=userCount;
        result.innerText="Congrats You Won"
        clap.play();
    }
   else if(userChoiceDisplay.innerText==computerChoiceDisplay.innerText){ 
        result.innerText="Fair NoBody is Looser";

    }
    else{
        
        computerCount ++;     
        computerCounter.innerText=computerCount;
        result.innerText="Sorry You Lost!!";

    }
    
}

var gameSaver=[];

function setInLocalStorage(){
    gameSaver.push({
        myWinTimes:userCount,
        computerWinTmes:computerCount
    })

    localStorage.setItem("savedGame",JSON.stringify(gameSaver));


}
function anotherTry(){
    
    var savedGame=JSON.parse(localStorage.getItem("savedGame"))
    console.log(savedGame[0].computerWinTmes);
    for(var i=0;i<savedGame.length;i++){
        console.log(savedGame[i].myWinTimes);
        userCounter.innerText=savedGame[i].myWinTimes;
        computerCounter.innerText=savedGame[i].computerWinTmes;

        
    }
   
   

}
anotherTry();