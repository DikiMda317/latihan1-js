function Angkot(nama, trayek, penumpang, kas) {
  this.nama = nama;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
}

var angkot1 = new Angkot("sandika", ["cicahem", "cibiru"], [], 0);
