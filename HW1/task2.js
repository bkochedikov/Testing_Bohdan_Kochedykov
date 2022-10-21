const char_count = (string) => {

    let counts = {};

    let ch, index, len, count;

    for (index = 0, len = string.length; index < len; ++index) {
        ch = string.charAt(index);
        count = counts[ch];
        counts[ch] = count ? count + 1 : 1;
    }
    return counts;
}

const first_non_repeating_letter = (string) => {
    let lower_str = string.toLowerCase();
    let counts_of_char =  char_count(lower_str);
    let index, ch, len;

    for (index = 0, len = string.length; index < len; ++index) {
        ch = string.charAt(index);
        if (counts_of_char[ch.toLowerCase()] === 1){
            return ch;
        }
    }
    return '';

}

console.log("Task 2:");
console.log("'stress' => filter_list('stress') => '%s'", first_non_repeating_letter('stress'));
console.log("'stress' => filter_list('stress') => '%s'", first_non_repeating_letter('sTreSS'));
