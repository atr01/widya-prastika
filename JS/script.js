const txtElement = ['Widya Prastika', 'dari Sukolilo', 'Sekolah di SMAN 1 Kayen'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.lenght){
		count = 0;
	}

	currentTxt = txtElement[count]

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik,500);

})();
