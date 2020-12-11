let modalOrder = document.querySelector('.modal-order')
let modalOrderButton = document.querySelectorAll('.order-btn')
let modalOrderClose = document.querySelector('.modal-order-close')

modalOrderButton.forEach(item=>{
	item.addEventListener('click',()=>{
		modalOrder.classList.add('active')
		overlay.classList.add('active')
	})
})

modalOrderClose.addEventListener('click', ()=>{
	modalOrder.classList.remove('active');
	overlay.classList.remove('active')
})