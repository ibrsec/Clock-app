

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".sec-hand");



timer = setInterval(func,1000);
func();


function func(){
    date = new Date();

    //digital
    let pretty_hour = date.getHours();
    let pretty_min = date.getMinutes();
    let pretty_sec = date.getSeconds();

    if(date.getHours() < 10){
        pretty_hour = "0" + String(date.getHours());
    }
    if(date.getMinutes() < 10){
        pretty_min = "0" + String(date.getMinutes());
    }
    if(date.getSeconds() < 10){
        pretty_sec = "0" + String(date.getSeconds());
    }



    hour.innerHTML = pretty_hour;
    minute.innerHTML = pretty_min;
    second.innerHTML = pretty_sec;
    




    //Analog 


    let second2 = (15 + date.getSeconds()) * 6;
    let minute2 = (15 + date.getMinutes()) * 6;
    let hour2 = (15 + date.getHours()) * 30;



    console.log("derece " + hour2 + ":" + minute2 + ":" + second2);
    console.log("gercek" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    console.log("-------");

    secondHand.style.transform = `rotate(${second2}deg)`;
    minuteHand.style.transform = `rotate(${minute2}deg)`;
    hourHand.style.transform = `rotate(${hour2}deg)`;
    


    
}





