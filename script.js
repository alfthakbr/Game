alert('Selamat datang');
var lagi = true;
var konfirmasi = true;

while(lagi === true) {
	var umur = prompt('Masukan umur');
	if (umur >= 18) {
		alert('Anda bisa mencoblos');
		var presiden = prompt('Pilih 1/2');
		if (presiden == 1) {
			konfirmasi = confirm('Apakah anda yakin memilih presiden 1 ?');
			if (konfirmasi === true) {
				alert('Anda memilih presiden 1');
			} else {
				alert('cancel');
			}
		} else if (presiden == 2) {
			konfirmasi = confirm('Apakah anda yakin memilih presiden 2 ?');
			if (konfirmasi === true) {
				alert('Anda memilih presiden 2');
			} else {
				alert('cancel');
			}
		} else {
			alert('Anda tidak memilih siapapun/Golput');
		}
	} else {
		alert('Maaf, anda di bawah umur/bocah');
	}

	lagi = confirm('Apakah anda ingin mencoblos lagi ?');
}
