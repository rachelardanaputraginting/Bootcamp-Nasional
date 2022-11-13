/** 1 :
 * Buatlah sebuah Array bernama mahasiswa yang berisi dua buah object
 * yang memiliki property nama <string>, stambuk <number>, dan instansi <string>.
 */
// TODO 1: Ketikkan kode Anda di bawah ini!
const mahasiswa = [
    {
        nama: 'Rachel',
        nim: 20017001,
        instansi: "Politeknik"
    },
    {
        nama: 'Amalia',
        stambuk: 20017002,
        instansi: "Politeknik"
    },
];

/** 2 : Tampilkan array mahasiswa */
// TODO 2: Ketikkan kode Anda di bawah ini!
for (let mhs of mahasiswa) {
    console.log(mhs)
}


/** 3 :
 * Setelah membuat Array mahasiswa, tambahkan satu buah object dengan property yang sama seperti object sebelumnya
 * dengan menggunakan Array methods.
 */
// TODO 3: Ketikkan kode Anda di bawah ini!
mahasiswa.push(
    {
        nama: 'Akbar',
        nim: 20017001,
        instansi: "Universitas"
    }
)
for (let mhs of mahasiswa) {
    console.log(mhs)
}



/** 4 : Hapus index 1 pada Array mahasiswa dengan menggunakan Array methods */
// TODO 4: Ketikkan kode Anda di bawah ini!
// mahasiswa.splice([2])

for (let mhs of mahasiswa) {
    console.log(mhs)
}

/** 5 : Tampilkan array mahasiswa dengan menggunkan for loop atau yang sejenisnya */
// TODO 5: Ketikkan kode Anda di bawah ini!
for (let mhs of mahasiswa) {
    console.log(mhs)
}

/** 6 : Tampilkan nama pada Object didalam Array mahasiswa dengan menggunakan for loop atau yang sejenisnya*/
// TODO 6: Ketikkan kode Anda di bawah ini!
for (let mhs of mahasiswa) {
    console.log(mhs.nama)
}
/** 7 : Ubahlah nama dari object index 0 Array mahasiswa menjadi Royhan*/
// TODO 7: Ketikkan kode Anda di bawah ini!
mahasiswa[0].nama = "Royhan"
for (let mhs of mahasiswa) {
    console.log(mhs.nama)
}
