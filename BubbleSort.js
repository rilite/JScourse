var arr = [5, 50, 23, 1, 70, 0, 10, 15, 99, 30];
console.log(arr);
for (var i = 1; i < arr.length- 1 ; i++) {
    for (var j = 1 ; j <= arr.length - 1; j++){
        if (arr[j] < arr[j - 1]) {
            var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j - 1] = temp;
        }
    }
}
console.log(arr);
