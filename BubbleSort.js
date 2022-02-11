const arr = [5, 50, 23, 1, 70, 0, 10, 15, 99, 30];
console.log(arr);
for (let i = 1; i < arr.length; i++) {
    for (let j = 1 ; j < arr.length; j++){
        if (arr[j] < arr[j - 1]) {
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j - 1] = temp;
        }
    }
}
console.log(arr);
