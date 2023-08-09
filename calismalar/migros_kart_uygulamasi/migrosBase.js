class migrosBase{
    indirimOrani = 20;

    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla(){
        let odenecekTutar = 0
        if(this.urunleriKontrolEt(this.urunler)){
            //sepetim dolu
            if(this.kartVarmi){
                //money karti var
                this.urunler.forEach((urun)=>{
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani)/100) 
                })
            }
            else{
                //money karti yoktur
                this.urunler.forEach((urun)=>{
                    odenecekTutar += urun.fiyat;
                })
            }

        }
        else{
            alert("En az bir adet urun satin almalisiniz.")
        }
        return odenecekTutar;
    }

    urunleriKontrolEt(urunler){
        if(urunler != null & urunler.length>0){
            return true;
        }
        return false;
    }
}