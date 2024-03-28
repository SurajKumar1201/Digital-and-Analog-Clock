let hr=document.getElementById("numbers1");
let min=document.getElementById("numbers2");
let sec=document.getElementById("numbers3");
// let ampm=document.getElementById("ampm");

let hrh=document.querySelector(".h-wrapper");
let minh=document.querySelector(".m-wrapper");
let sech=document.querySelector(".s-wrapper");

setInterval(function(){
    let hour=new Date().getHours()*30;
    let minute=new Date().getMinutes()*6;
    let second=new Date().getSeconds()*6;

    hrh.style.transform="Rotate("+hour+ "deg)";
    minh.style.transform="Rotate("+minute+ "deg)"
    sech.style.transform="rotate("+second+ "deg)"

    let hour1=new Date().getHours();
    let second1=new Date().getSeconds();
    let minute1=new Date().getMinutes();

    hr.innerText=hour1;
    min.innerText=minute1;
    sec.innerText=second1;
    

    // let ampm="AM";
    // if(hr>=12){
    //     ampm="PM"
    // }
    // ampm.innerText=ampm;
   
    
},1000);

