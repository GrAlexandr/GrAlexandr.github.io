// Завдання:
// 	- Реалізувати гру "п'ятнашки"
// Можна використовувати jQuery і його плагіни для Dragndrop.
// Потрібно реалізувати можливість гри мишкою та з клавіатури (стрілочками);
// У випадку перемоги виводити користувачу повідомлення.

var arr = [],
		table = $('#play'),
		td = $('td'),
		button = $('#btn');

function compareRandom(a, b) {
	return Math.random() - 0.5;
}
function mix() {
	arr = [];
	for (var i = 1; i <= 16; i++) {
		arr.push(i);
}
	arr.sort(compareRandom);
	for (var j = 0; j < td.length; j++) {
		td[j].textContent = arr[j];
		if(td[j].textContent === '16' ) $(td[j]).addClass( "empty" );
		if(td[j].textContent !== '16' ) $(td[j]).removeClass( "empty" );
	}
		return arr;
}
button.on('click', mix);
