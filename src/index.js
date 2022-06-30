module.exports = function reverse (n) {
    n_str = String(Math.abs(n));
    result = []
    for (let i=n_str.length; i>=0; i--){

        result.push(n_str[i]);
    }
    return Number(result.join(''));

}

//  console.log(module.exports(-123));