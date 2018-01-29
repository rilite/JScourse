// 														car = 'sdfsfddddfds';   // глобальная переменная не использовать
//
// 														var car = 46;  //ES5 лучше не использовать
//
// let car = function (){};
//
// 														global['car'] = 'sfasf';   // не использовать
// USER_NAME = 'KKKKK'; //константа, в коде не меняется
//

// const userName = 'Vika';
// console.log(userName);

// let x=1; x=2; x=3;
// console.log(x);

// let x = 'Ivan';
// console.log(typeof x);

// let x = function (){};
// console.log(typeof x);

// let x = true;
// console.log(typeof x);

// let x = false;
// console.log(typeof x);

// let x = null;
// console.log(typeof x);    // object

// let x = {};
// console.log(typeof x);      // object

// let x = false;
// console.log(typeof x);


// ======= FUNCTION ========


// -----------Простая функция-----------


// function go (name, speed){   // в функции можно передавать несколько параметров, а вызывать один
// 	console.log(name, speed);  // вывод в консоль параметров функции
// }
// go ('Ivan', 56);             // значения параметров функции


// function zero(){
// 	var x = 'hello';
// 	this.go = function(){
// 	console.log(x);
// 	}
// }
// var y = new zero (); y.go();


// function zero(){
// 	var x = 'Привет';
// 	 function go(){
// 	 console.log(x);
// 	}
// 	go();
// }
// zero ();

// var x = function go(){              // переменной является функция go()
// 	console.log('hello');
// }
// x();                                // вызов функции go() через переменную x


// function test (name){                 // объявление функии test с параметром name
// 	console.log(name);									// вывод в консоль параметра функции name
// }
// test('ivan');													// вызов по имени функции со своим параметром


// -----------Cамовызываемая функция-----------


// (function(){   //  самовызываемая функция - вызом осуществляется сам собой
// 	console.log('hello');
// })()


// -----------Аноннимная функция-----------


// var x = (name, age)=>{		// аноннимная функция (стрелочная функция)
// 	console.log('Vasilii', 55);
// }
// x();


// -----------Рекурсивная функция-----------


// function go (i){
// 	if (i == 10){
// 		return;
// 	}
// 	i=i+1;
// 	console.log(i);
// 	go(i);
// }
// go(7);


// function profit (a, b){
// 	var result = a * b;
// 	return result;
// }
// var res = profit(8,5);     // объявление переменной res, которая вызывает функцию profit (a, b), с параметрами (1,1)
// console.log(res);
// console.log(res +48);



// Написать плагин, который находит число в массиве.
function linearSearch(t,A) {                  // t - искомый элемент, A - массив, в котором ищем.
    var n = A.length; i = 0; m=0;   
    A[n] = t;
    while (A[ i ] !== t) i++;
    if (i < n){
    	m=i+1;
    	console.log('Индекс искомого числа в массиве ' +i);
    	console.log('Порядковый номер искомого числа в массиве ' +m);
    	return i;
    } else {                                // На выходе индекс искомого элемента.
    	console.log('Искомое число в массиве отсутствует');
    	return -1;
    	}                                    // Если искомого элемента нет в массиве, то -1.
};
linearSearch(53,[53,8,78,2,45,76]);


// Написать плагин который упорядочивает массив 1,6,3,2,5,4 (любым методом сортировки)

/*Сортировка выбором 
Сортировка выбором начинается с поиска наименьшего элемента в списке и обмена его с первым элементом
(таким образом, наименьший элемент помещается в окончательную позицию в отсортированном массиве).
Затем мы сканируем массив, начиная со второго элемента, в поисках наименьшего среди оставшихся n−1
элементов и обмениваем найденный наименьший элемент со вторым, т.е. помещаем второй наименьший элемент 
в окончательную позицию в отсортированном массиве. В общем случае, при i-ом проходе по списку (0<=i<=n−2)
алгоритм ищет наименьший элемент среди последних n−i элементов и обменивает его с A[i].
После выполнения n−1 проходов список оказывается отсортирован. */

function selectionSort(A){                        // A - массив, который нужно отсортировать по возрастанию.
    console.log('Исходный массив      ' +A);
    var n = A.length;
    for (var i = 0; i < n-1; i++){
    	var min = i;
    	for (var j = i+1; j < n; j++){
    		if (A[j] < A[min]) min = j;
    	}
    	var t = A[min]; A[min] = A[ i ]; A[ i ] = t;
    }                    
    console.log('Результат сортировки ' +A);
    return A;                                        // На выходе сортированный по возрастанию массив A.
};
selectionSort([53,8,78,2,45,76]);





// Дан массив 1,2,3,”строка”,5,6, найти строку в массиве и вывести на экран. 
(function (array = [1,2,3,'gggg',5,6]){
	for (var i = 0; i < array.length; i++) {
		if (typeof array[i] === 'string') {
			console.log('Индекс искомой строки в массиве ' +i);
			return i;
		}
	}
})();



/*var selectNumber = prompt('Вводите ​любое целое положительное число', ''), n = 0;

function sum (selectNumber){
    if (selectNumber>=1 && typeof selectNumber == 'numder' && isInteger(selectNumber)){
        return;
    }
    n=n+(selectNumber-1);
    console.log(n);
    sum(n);
}
sum(selectNumber);
*/