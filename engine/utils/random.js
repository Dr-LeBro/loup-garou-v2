function randomBetween(low, high){ //random entre low et hight
    high += 1 ;
    var random = Math.random() * (high - low) + low;
    return parseInt(random);
}

module.exports = {
    randomBetween
}