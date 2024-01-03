

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");



timer = setInterval(func,1000);
func();



function func(){
    tarih = new Date();
    let pretty_hour = tarih.getHours();
    let pretty_min = tarih.getMinutes();
    let pretty_sec = tarih.getSeconds();

    if(tarih.getHours() < 10){
        pretty_hour = "0" + String(tarih.getHours());
    }
    if(tarih.getMinutes() < 10){
        pretty_min = "0" + String(tarih.getMinutes());
    }
    if(tarih.getSeconds() < 10){
        pretty_sec = "0" + String(tarih.getSeconds());
    }



    hour.innerHTML = pretty_hour;
    minute.innerHTML = pretty_min;
    second.innerHTML = pretty_sec;
    // console.log(tarih.getFullYear()); // Yılı al
    // console.log(tarih.getMonth());    // Ayı al (0'dan başlar)
    // console.log(tarih.getDate());     // Günü al
    // console.log(typeof tarih.getHours());    // Saati al
    // console.log(typeof tarih.getMinutes());  // Dakikayı al
    // console.log(typeof tarih.getSeconds());  // Saniyeyi al

    
}

