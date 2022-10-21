const digital_root = (number) => {
    if (String(number).length === 1) {
        return number;
    }
    let res_number = String(number)
        .split('')
        .reduce((acc, curr) => {
            return acc + Number(curr);
        }, 0);
    if (String(res_number).length !== 1){
        return digital_root(res_number);
    } else{
        return res_number;
    }
}

console.log("Task 3:");
console.log("16 => digital_root(16) => ", digital_root(16));
console.log("942 => digital_root(942) => ", digital_root(942));
console.log("132189 => digital_root(132189) => ", digital_root(132189));
console.log("493193 => digital_root(493193) => ", digital_root(493193));