// console.log('hello');
// alert('Good');

// console.log(window);

// var car = '*'; //  объявление переменной

// var car={
// 	model:'lanos',          // свойство
// 	run = function(){				// метод
// 		console.log('xxx');
// 	}
// }

var car1 = {
	model:'Славута',
	disk: 11,
	run: function(){
		console.log('модель автомобиля ' + car1.model + ' размер диска ' + car1.disk + ' дюймов');
	}
}

var car2 = {
	model:'Таврия',
	disk: 13,
	run: function(){
		console.log('модель автомобиля ' + car2.model + ' размер диска ' + car2.disk + ' дюймов');
	}
}

var car3 = {
	model:'Ланос',
	disk: 15,
	run: function(){
		console.log('модель автомобиля ' + car3.model + ' размер диска ' + car3.disk + ' дюймов');
	}
}
car1.run();
car2.run();
car3.run();

