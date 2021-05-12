// deklarasi variable //
const salah = document.querySelectorAll('.kotak');
const show1 = document.querySelector('h3');
const show2 = document.querySelector('h2');
const show3 = document.querySelector('h1');

// membuat angka untuk menentukan warna benar atau salah //
let angka = Math.floor((Math.random() * 9) + 1);

// membuat timer ketika di klik maka akan delay 
function TimeFunction() {
	 setTimeout(function() {
		location.reload();
	},500);
}

// deklarasi variabel id kotak dan mendeklarasikan variabel klik nanti untuk menampilkan berapa kali yang sudah di klik
let nambahBox = "kotak" + angka;
let jumlahKlik = 0;
let kurangKlik;

console.log(nambahBox);

// membuat loop supaya agar ketika di klik bisa mengklik semua dari const salah
salah.forEach(item => {

	// membuat fungsi klik
	item.addEventListener('click', event => {

		// ketika di klik maka angka menambah 1;
		++jumlahKlik;

		// kondisi ketika klik sudah lebih tiga kali maka akan ke reset

		if(jumlahKlik <= 3) {


			// membuat nyawa pada game 
			kurangKlik = 3 - jumlahKlik ;

			//membuat kondisi jika ada suatu yang memiliki attribute yang sama dengan nambah box maka akan memunculkan class benar jika tidak maka akan menambahkan class salah

			  if(item.getAttribute("id") == nambahBox) {
				item.classList.add('benar');
				show2.innerHTML = "Kamu Menang";
					alert('Ulang lagi yok');
					TimeFunction();
			} else {
				item.classList.add('salah');
			}

		} else {
			alert('Coba lagi OK!');
			location.reload();
		}

		show1.innerHTML = `jumlah Klik = ${jumlahKlik}`;
		show2.innerHTML = `Nyawa anda tersisa = ${kurangKlik}`;

	})


})




