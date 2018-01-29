/*Task 1*/

// cycle with precondition
var i = 1;
while (i <= 5) {
	console.log(i);
	i++;
}

// cycle with postcondition
var i = 1;
do {
	console.log(i);
	i++;
}
while(i <= 5);

// cycle
for (let i = 1; i <= 5; i++) {
	console.log(i);
}




/*Task 2*/

// cycle with precondition
var i = 5;
while(i >= 1){
	console.log(i);
	i--;
}

// cycle with precondition
var i = 5;
do {
	console.log(i);
	i--;
}
while(i >= 1);

// cycle
for (let i = 5; i >= 1; i--) {
	console.log(i);
}



/*Task 3*/


// cycle with precondition
var i = 1;
while(i <= 10){
	console.log('3 * '+ i + ' = '+  3*i);
	i++;
}

// cycle with postcondition
var i = 1;
do {
	console.log('3 * '+ i + ' = '+  3*i);
	i++;
}
while(i <= 10);

// cycle
for (let i = 1; i <= 10; i++) {
	console.log('3 * '+ i + ' = '+  3*i);
}