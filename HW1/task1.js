const filter_list = (list) => {
    return list.filter(element => typeof(element) === "number")
}
console.log("Task 1:");
console.log("[1,2,'a','b'] => filter_list([1,2,'a','b']) => ", filter_list([1,2,'a','b']));
console.log("[1,'a','b',0,15] => filter_list([1,'a','b',0,15]) => ", filter_list([1,'a','b',0,15]));
console.log("[1,2,'aasf','1','123',123] => filter_list([1,2,'aasf','1','123',123]) => ", filter_list([1,2,'aasf','1','123',123]));