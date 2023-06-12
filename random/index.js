function generateRandom(min = 0, max = 100) {
    if (min >= max) {
        const temp = min;
        min = max;
        max = temp;
    }
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random);
}




generateRandom();
generateRandom(5);
generateRandom(80);
generateRandom(200, 100);