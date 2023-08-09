let mesaj = 
`
Migros'a hosgeldiniz.
Money Kartiniz var mi?
1-Evet
2-Hayir
`;

const urunler = [
    {
        urunIsmi : "Sut",
        fiyat: 15
    },
    {
        urunIsmi : "Makarna",
        fiyat: 9
    },
    {
        urunIsmi : "Bebek Bezi",
        fiyat: 100
    },
    {
        urunIsmi : "Kusbasi",
        fiyat: 220
    }
]

let sonuc = confirm(mesaj);
let odenecekTutar2;

if(sonuc){
    //Money karti vardir
    let isim = prompt("Isminizi giriniz: ");
    let soyisim = prompt("Soyisminizi giriniz: ")
    
    //const musteri = new musteri(isim,soyisim,sonuc,urunler)
    const musteri = new Musteri(isim, soyisim, sonuc, urunler)
    odenecekTutar2 = musteri.hesapla()

    alert(`Musteri Bilgileri: ${isim} ${soyisim} | Odenecek Tutar: ${odenecekTutar2} TL`)
}
else{
    //Money karti yoktur
    const musteri = new Musteri(null, null, sonuc, urunler)
    odenecekTutar2 = musteri.hesapla()
    alert(`Odenecek Tutar: ${odenecekTutar2} TL`)
}