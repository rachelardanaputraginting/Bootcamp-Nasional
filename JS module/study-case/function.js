/** Jangan mengubah Kode di Bawah ini! */
const mahasiswa = [
  {
    nama: 'Royhan',
    nim: 20017001,
    mk: [
      { nama: 'Pemrograman Web', kuis: 65, uts: 80, uas: 75 },
      { nama: 'Mobile Programming', kuis: 70, uts: 80, uas: 70 },
      { nama: 'Ethical Hacking', kuis: 75, uts: 70, uas: 75 },
    ],
  },
  {
    nama: 'Reyhan',
    stambuk: 20017002,
    mk: [
      { nama: 'Pemrograman Web', kuis: 70, uts: 80, uas: 75 },
      { nama: 'Mobile Programming', kuis: 70, uts: 80, uas: 80 },
      { nama: 'Ethical Hacking', kuis: 80, uts: 70, uas: 75 },
    ],
  },
];

/** 1 :
 * Buatlah sebuah function tanpa parameter yang berfungsi untuk
 * menampilkan nilai uas mk Pemrograman Web pada Array of Object mahasiswa
 */
// TODO 1: Ketikkan kode Anda di bawah ini!
function tes() {
  for (let mhs of mahasiswa) {
    console.log("Nilai Uas : ", mhs.mk[0].uas)
  }
}

tes()

/** 2 :
 * Buatlah sebuah function dengan parameter nama yang berfungsi untuk
 * menampilkan nilai uas mk Pemrograman Web pada Array of Object mahasiswa
 * berdasarkan nama mahasiswa
 */
// TODO 2: Ketikkan kode Anda di bawah ini!
function namaUas(nama) {
  for(i = 0; i <  nama.length; i++) {
    console.log("Nama :  ", nama[i].nama)
    console.log("Nilai Uas : ", nama[i].mk[0].uas)
} 
}

namaUas(mahasiswa)
