let modalOrder = document.querySelector('.modal-order')
let modalOrderButton = document.querySelectorAll('.order-btn')
let modalOrderClose = document.querySelector('.modal-order-close')

modalOrderButton.forEach(item => {
	item.addEventListener('click', () => {
		modalOrder.classList.add('active')
		overlay.classList.add('active')
	})
})

modalOrderClose.addEventListener('click', () => {
	modalOrder.classList.remove('active');
	overlay.classList.remove('active')
})

// document.querySelector('.modal-push').addEventListener('click', (event) => {
// 	event.preventDefault();
// 	axios.get('https://dev.groot.net.ua/en')
// 		.then(function (response) {
// 			console.log(response);
// 		})
// 		.catch(function (error) {
// 			console.log(error);
// 		})
// })