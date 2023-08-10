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
let odenecekTutar;

if(sonuc){
    let isim = prompt("Isminiz: ")
    let soyisim = prompt("Soyisminiz: ")
    //Money karti vardir
    const musteri1 = new Musteri(isim, soyisim, sonuc, urunler)
    odenecekTutar = musteri1.hesapla()

    alert(`Musteri Bilgileri: ${isim} ${soyisim} | Odenecek Tutar: ${odenecekTutar} TL`)
}
else{
    //Money karti yoktur
    const musteri2 = new Musteri(null, null, sonuc, urunler)
    odenecekTutar = musteri2.hesapla()
    
    alert(`Odenecek Tutar: ${odenecekTutar} TL`)
}