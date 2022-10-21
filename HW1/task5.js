const meeting = (s) => {
    let array = s.split(';'), guest_array = [];

    array.forEach(guest => {
        let pair = {
            first_name: guest.split(':')[0],
            last_name: guest.split(':')[1],
        };
        guest_array.push(pair);
    })

    guest_array.sort((a, b) => {
        if ( a.last_name > b.last_name ){ return 1 }
        else if ( a.last_name < b.last_name ){ return -1 }
        else if ( a.last_name === b.last_name ){
            if ( a.first_name > b.first_name ){ return 1 }
            else if ( a.first_name < b.first_name ){ return -1 }

            else return 0;
        }
    });

    let result = ``;
    guest_array.forEach(guest =>
        result += `(${guest.last_name.toUpperCase()}, ${guest.first_name.toUpperCase()}) `)

    return result;
}
let s = "Fred:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log('Task 5:');
console.log(" meeting(s) => ", meeting(s));
