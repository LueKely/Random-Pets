const cat_result = document.getElementById('cat-result');
const cat_btn = document.getElementById('cat-btn');
const dog_result = document.getElementById('dog-result');
const dog_btn = document.getElementById('dog-btn');
const cat_text = document.getElementById('cat__text');
const dog_text = document.getElementById('dog__text');

cat_btn.addEventListener('click', () => {
	showCatPic();
	showCatFact();
});
dog_btn.addEventListener('click', () => {
	showDogPic();
	showDogFact();
});
function showCatPic() {
	fetch('https://api.thecatapi.com/v1/images/search').then((res) => {
		res.json().then((data) => {
			console.log('cat ' + data[0].url);
			cat_result.innerHTML = `<img class="result__img" src="${data[0].url}"/>`;
		});
	});
}

function showDogPic() {
	fetch('https://random.dog/woof.json').then((res) => {
		res.json().then((data) => {
			dog_result.innerHTML = `<img class="result__img" src = "${data.url}"/>`;
		});
	});
}

function showCatFact() {
	fetch('https://meowfacts.herokuapp.com/').then((res) => {
		res.json().then((data) => {
			cat_text.innerText = data.data[0];
		});
	});
}

function showDogFact() {
	fetch('https://asli-fun-fact-api.herokuapp.com/').then((res) => {
		res.json().then((data) => {
			console.log(data.data.fact);

			dog_text.innerText = data.data.fact;
		});
	});
}

function showAll() {
	showCatPic();
	showCatFact();
	showDogPic();
	showDogFact();
}

showAll();
