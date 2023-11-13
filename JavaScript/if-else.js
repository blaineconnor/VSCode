//yas >= 18
//mezuniye == "lise" yada mezuniyet == "üniversite"
//mantıksal operatörler
let yas = 20;
let mezuniyet = "üniversite"
if(yas>=18 && (mezuniyet == "lise" || mezuniyet == "üniversite")){
console.log("ehliyet alabilir")
} else{
    console.log("ehliyet şartları tutmuyor.")
}

//and
//true, true => true
//true, false => false

//or
//true, true => true
//true, false => false

// --------------------------------------- \\


//Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

let sayi1 = 20;
if(sayi1>10 && sayi1<50){
    console.log("sayı 10-50 arasındadır.");
} else {
    console.log("sayı 10-50 arasında değildir.");
}

//Bir sayının pozitif tek sayıp olup olmadığını kontrol ediniz

let sayi2 = 21;
if(Math.abs(sayi2 % 2) == 1 || sayi2> 0){
    console.log("sayı pozitiftir.")
}

//x, y, z sayılarının büyüklük karşılaştırmasını yapınız.

let x = 10, y = 20, z = 30;

if(x>y && x>z){
    console.log("x en büyük");
} else if (y>x && y>z) {
    console.log("y en büyük");
} else if (z>x && z>y) {
    console.log("z en büyük");
} else {
    console.log("sayılar eşit")
}


//2 vize (%40) ve 1 final(60%) notuna göre hesaplanan ortalama için;
    //a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın
    //b- Geçmek için ortalama 50 bile olsa final not en az 50 olmalıdır.
    //c- Finalde 70 alındığıda ortalama 50'nin altında olsa bile dersten geçilsin.

    let vize1 = 60;
    let vize2 = 60;
    let final = 49;

    let ortalama = (((vize1+vize2) / 2) * 0.4) + (final * 0.6);

    console.log("ortalamanız: " +ortalama);

    if(ortalama >= 50 && final>= 50){
        console.log("geçtiniz")
    } else {
        console.log("kaldınız")
    }


    if(ortalama >= 50 || final>= 70){
        console.log("geçtiniz")
    } else {
        console.log("kaldınız")
    }