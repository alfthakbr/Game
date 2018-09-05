// Pseudocode (GUBATA)
// pilihan Player
var cobalagi = true;
while (cobalagi) {
	var player = prompt('Pilih dengan mengetik:\nGunting\nBatu\nKertas');
	// pilihan Computer + bilangan random
	var com = Math.random();
	if ( com < 0.35 ) {
		com = 'gunting';
	} else if ( com >= 0.35 && com < 0.65 ) {
		com = 'batu';
	} else {
		com = 'kertas';
	}
	// rules
	var result = '';
	if ( player == com ) {
		result = 'DRAW';
	} else if ( player == 'gunting' ) {
		result = (com == 'batu') ? 'KALAH' : 'MENANG';
	} else if ( player == 'batu' ) {
		result = (com == 'gunting') ? 'MENANG' : 'KALAH';
	} else if ( player == 'kertas') {
		result = (com == 'gunting') ? 'KALAH' : 'MENANG';
	} else if ( player == 'batu') {
		result = (com == 'kertas') ? 'MENANG' : 'KALAH';
	} else {
		alert('invalid');
	}
	// output/result
	alert('Player 	: '+ player +'\nComputer	: '+ com +'\nAnda 	: '+ result);
	cobalagi = confirm('Coba lagi ?');
}
alert('Thanks for play!')