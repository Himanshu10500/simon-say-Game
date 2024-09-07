let started = false;
let level=0;
let btnarr = ["btn1" , "btn2", "btn3" ,"btn4"];
let game=[];
let user = [];
let show = document.querySelector("#frontBtn");
let input = document.querySelector("input");
let nameprint=document.querySelector("#nameprint");
console.dir(input);

    show.addEventListener("click" , function(){
        this.parentElement.style.display="none";
        
            nameprint.innerText=`welcome ${input.value}`;
       
        //  nameprint.innerText=`welcome ${input.value}`;
         
        setTimeout(function(){
            nameprint. style.display = "none";
            start();
            display();
        },2000);
    });


// let container = document.querySelector(".container");
// show.addEventListener("click",function(){
//     let par = this.parentElement;
//     par.style.display ="none";
    
//     start();
//     display();
    
// });

function display(){
    let container = document.querySelector(".container");
   
   
    container.style.display = "block";
    // setTimeout(()=>{
    //     let body = document.querySelector("body");
    // //    body.backgroundColor= "white";
    // },100);
};
show.addEventListener("mouseEnter",function(){
    this.color = "blue";
}) 
let btn = document.querySelector("button")
let frontBtn = document.querySelector("#frontBtn")
function start(){
document.addEventListener("keypress", function(event){
    if(started===false){
        console.log("game is started");
        started  = true;
        levelup();
    }
});
}
function flashbtn(btn){
    btn.classList.add("flash"); 
//     console.dir(btn);
//    console.log(btn.getAttribute("class"));
setTimeout(function(){
    btn.classList.remove("flash");
},300);
};
function userflashbtn(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 100);
};
function levelup(){
    level++;
    let h4 = document.querySelector("h4");
    h4.innerText = `level${level}`;
    let random = Math.floor(Math.random()*3);
    
    let btnidx = btnarr[random];
    game.push(btnidx);
    
    // console.log(game)
    
    let flashbutton = document.querySelector(`#${btnidx}`);
   
    flashbtn(flashbutton);
    
    
};
function check(){
    let idx = user.length-1;
    
    
        if(user[idx]!==game[idx]){
            gameover();
            return;
        }
    
    if(user.length===game.length){
        user = [];
        
        setTimeout(()=>{
            levelup(),2000;
        })
    }
}

function btnpress(){
    let btn = this;
    setTimeout(userflashbtn(btn) , 250);
    // userflashbtn(btn);

    let userbtn = btn.getAttribute("id");
    user.push(userbtn);
    console.log(user);
    check();
}
let allbtn = document.querySelectorAll(".btn");
for(let singlebtn of allbtn){
    singlebtn.addEventListener("click" , btnpress);
};

function gameover(){
    let h4 = document.querySelector("h4");
    h4.innerText = `you lost , your score is ${level}  key any press  to start the game`;
    game = [];
    user = [];
    started = false;
    level = 0;
    start();
}



