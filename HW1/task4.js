const pairs_count = (arr, target) => {
    let counter = 0

    for ( let i = 0; i < arr.length-1; i++ ){
        for ( let j = i+1; j < arr.length; j++ ){
            if (arr[i] + arr[j] === target) {
                counter++;
            }
        }
    }

    return counter;
}

console.log("Task 4:");
console.log(" [1, 3, 6, 2, 2, 0, 4, 5], 5 => pairs_count([1, 3, 6, 2, 2, 0, 4, 5], 5) => ", pairs_count([1, 3, 6, 2, 2, 0, 4, 5], 5));
