var jmlGojek = 10;
var gojekBeroperasi = 6;

for( var noGojek = 1; noGojek <= jmlGojek; noGojek++ ) {

	if (noGojek <= gojekBeroperasi && noGojek !== 5) {
		console.log('Gojek no.' + noGojek + ' sedang beroperasi');
	} else if (noGojek === 8 || noGojek === 10 || noGojek === 5) {
		console.log('Gojek no.' + noGojek + ' sedang lembur');
	} else {
		console.log('Gojek no.' + noGojek + ' sedang tidak beroperasi');
	}
}