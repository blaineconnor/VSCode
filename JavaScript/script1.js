let ogrenciAd1 = "Ada";
let ogrenciSoyad1 = "Bilgi";
let ogrenciDogumTarihi1 = "2010";
let ogr1_mat1 = 70;
let ogr1_mat2 = 70;
let ogr1_mat3 = 80;
let ogr1_ort = (ogr1_mat1 + ogr1_mat2 + ogr1_mat3) / 3;

console.log(parseFloat(ogr1_ort));
console.log(ogr1_ort >= 50)

let ogrenciAd2 = "Yiğit";
let ogrenciSoyad2 = "Bilgi";
let ogrenciDogumTarihi2 = "2012";
let ogr2_mat1 = 40;
let ogr2_mat2 = 40;
let ogr2_mat3 = 50;
let ogr2_ort = (ogr2_mat1 + ogr2_mat2 + ogr2_mat3) / 3;

console.log(parseFloat(ogr2_ort));
console.log(ogr2_ort >= 50)

let suankiYil = new Date().getFullYear();

let ogr1_yas = suankiYil - parseInt(ogrenciDogumTarihi1);
let ogr2_yas = suankiYil - parseInt(ogrenciDogumTarihi2);

console.log(ogr2_yas);
console.log(typeof ogr2_yas);