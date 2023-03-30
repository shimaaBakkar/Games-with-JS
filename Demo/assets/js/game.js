
var getname=prompt("enter your name")

var audioRight = new Audio('./right.wav');
var audioWrong = new Audio('./wrong.wav');
// _________________________________________________________________________________________


document.querySelector(".control span").onclick=function(){
  // If Name Is Empty
  if (getname == null || getname == "") {

    // Set Name To Unknown
    document.querySelector(".name span").innerHTML = 'Unknown';

  // Name Is Not Empty
  } else {

    // Set Name To Your Name
    document.querySelector(".name span").innerHTML = getname;

  }



    document.querySelector(".control").remove();

  timeGenerator();

}

let blocksContainer = document.querySelector(".memorygame-blocks");

let blocks= Array.from(blocksContainer.children)
// console.log(blocks) 




 /////////////////////////////////////////////////////////////
//  let orders = [...Array(blocks.length).keys()];
 let orders = Array.from(Array(blocks.length).keys()); 
console.log(orders)



shuffle(orders);

blocks.forEach((block,index)=>{ 
    //console.log(index) 0..11

    block.style.order= orders[index];

    block.addEventListener("click",function(){


        flipBlock(block)

    })
    
});

//////////////////////////////function/////////////////////////
function flipBlock(Y) {
    Y.classList.add("is-flipped")

    let blockflip=blocks.filter(N=> N.classList.contains('is-flipped'))
    

    if(blockflip.length==2){

        stopClicking();

        checkMatched(blockflip[0],blockflip[1])
 

    }

    function checkMatched(firstBlock,secondBlock){

        let triesElement = document.querySelector('.tries span');

        if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');
    audioRight.play();

//    console.log(firstBlock.dataset.technology)
}else{
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
    
    setTimeout(() => {

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
  
      }, 1000);
      audioWrong.play()
}

movesCounter();
    }
   


    function stopClicking() {

    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {
  
      // Remove 
      blocksContainer.classList.remove('no-clicking');
  
    }, 1000);
  
      }}



function shuffle(array) {
    let current = array.length,
      temp,
      random;
//12
while(current>0){
    random = Math.floor(Math.random() * current);

    current--;

    console.log(random)
 temp =array[current];

array[current] = array[random];
//[0,1,2,3]=[11,3,5,6]

array[random] = temp;

}


return array;
}







const   timeValue = document.getElementById("time");
let second=0, minutes=0;
function timeGenerator(){

  setInterval(function(){
    second += 1;

    if(second>60){
        second=0;
        minutes += 1;
    }

 



    let secondsValue= (second<10)?`0${second}`:second;
    let minutesValue= (minutes<10)?`0${minutes}`:minutes;

    timeValue.innerHTML = ` <span>Time : </span>${minutesValue}: ${secondsValue} `
},1000)
};


const moves = document.getElementById("movescount");
let Counter =0;
function movesCounter(){

    Counter += 1;
     moves.innerHTML = `<span>Moves : </span>${Counter} `;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//let blocks= Array.from(blocksContainer.children)

// const generateRandom=function(size=4){

//     let tempArray=[...items];
    
//     let cardValues=[];
    
//     size = (3*size);
    
//     for (let i = 0; i < size; i++) {
//     const randomIndex = Math.floor(Math.random()* tempArray.length);
    
//     cardValues.push(tempArray[randomIndex]);
//     tempArray.splice(randomIndex, 1);//cut and remove from temarry
//     }
//     return cardValues;
//     }
    
   
    // var arr =[1,2,3,4,5,7,8,9]

// console.log(Math.floor(Math.random()* arr.length))5
// console.log( arr[5])7
// console.log( arr.splice(5 , 1)  );[7]
// console.log(arr)[1,2,3,4,5,8,9]


   
