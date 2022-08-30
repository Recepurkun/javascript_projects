let Ad = prompt("Lutfen adinizi giriniz: ") //kullanicidan ismini istiyoruz
let myName = document.querySelector("#myName") //html icerisindeki myname adli id'yi seciyoruz
myName.innerHTML = `${Ad}` // sectigimiz id'nin bulundugu kisma kullanicidan aldigimiz isim bilgisini giriyoruz

// isim alani bos mu degil mi kontrol ediyoruz bossa tekrar istiyoruz degilse ekrana yazdiriyoruz
if ( Ad != "")
{
    myName.innerHTML = `${Ad}`
}
else {
    alert("Bir isim giriniz")
    location.reload();
}

//guncel zamanı ekranda gosterecek fonksiyonu tanimliyoruz
function showTime(){
    const weekday = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"]; 
    /* haftanin gunlerinin oldugu bir dizi tanimliyoruz bunun sebebi 
    getday ile aldigimiz verinin sayisal bir degere esit olması, 
    biz de bunu dizimizin icindeki string karsiligina esitliyoruz */
    var today = new Date(); // date'i tutacak bir degisken tanimliyoruz
    let h = today.getHours(); //saati tutacak degiskene atiyoruz
    let m = today.getMinutes(); //dakikayi tutacak degiskene atiyoruz
    let s = today.getSeconds(); //saniyeyi tutacak degiskene atiyoruz
    let d = weekday[today.getDay()]; /*gunu tutacak degiskene atiyoruz. buradan gelen sayisal veri dizideki index sayisi hangi string bilgiye denk geliyorsa onu atiyor degiskene.*/
    m = checktime(m); //fonksiyona minute ve second bilgilerini atiyoruz kontrol etmek icin
    s = checktime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + ":" + d;
    //ekrana yazdiriyoruz
    setTimeout(showTime, 1000);//ekranda artarak ilerleyisini gormek icin yaziyoruz.
}

/*saniye ve dakikanin tek haneli oldugu yerlerde basina 0 ekliyoruz
burada da bunu kontrol ediyoruz.*/
function checktime(i){
    if (i < 10) {
        i = "0" + i
    }
        return i;
    }
showTime()//fonksiyonu cagiriyoruz