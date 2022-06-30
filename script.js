const cat_result = document.getElementById('cat-result');
const cat_btn = document.getElementById('cat-btn');
const dog_result = document.getElementById('dog-result');
const dog_btn = document.getElementById('dog-btn');

cat_btn.addEventListener('click', showCatPic);
dog_btn.addEventListener('click', showDogPic);
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
			console.log(`Dog ${data.url}`);
			dog_result.innerHTML = `<img src = "${data.url}"/>`;
		});
	});
}
