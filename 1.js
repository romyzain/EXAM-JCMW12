
function lelang(num){
    var baju        = 10000
    var celana      = 20000
    var kacamata    = 30000

    var kBaju    = 0.1
    var kCelana  = 0.2
    var kKacamata= 0.3
    for(i=1; i<=num;i++){
        if(true){
            baju        +=  baju*kBaju
            celana      +=  celana*kCelana
            kacamata    +=  kacamata*kKacamata
        }
        baju        = Math.ceil(baju)
        celana      = Math.ceil(celana)
        kacamata    = Math.ceil(kacamata)
        
    }    

    return `Di menit ${i-1} Product info \n Nama Barang = Baju , harga = Rp. ${baju} \n Nama Barang = Celana , harga = Rp. ${celana} \n Nama Barang = Kacamata , harga = Rp. ${kacamata} \n`
}

console.log(lelang(1))
console.log(lelang(5))
console.log(lelang(10))
