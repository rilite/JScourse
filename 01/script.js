var car1 = {
	model:'Славута',
	disk: 11,
	run: function(){
	console.log('Модель автомобиля ' + car1.model + ' Размер диска ' + car1.disk + ' дюймов');
	}
};
var car2 = {
	model:'Таврия',
	disk: 13,
	run: function(){
	console.log('Модель автомобиля ' + car2.model + ' Размер диска ' + car2.disk + ' дюймов');
	}
};
var car3 = {
	model:'Ланос',
	disk: 15,
	run: function(){
	console.log('Модель автомобиля ' + car3.model + ' Размер диска ' + car3.disk + ' дюймов');
	}
};
car1.run();
car2.run();
car3.run();

