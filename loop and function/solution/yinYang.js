let userInputs = [
    { name: 'Wacky Waves', size: 1 },
    { name: 'Silly Swirls', size: 2 },
    { name: 'Goofy Grid', size: 3 },
    { name: 'Crazy Circles', size: 4 },
    { name: 'Bizarre Blocks', size: 5 },
];

function getSize(userInput) {
    return (2 * userInput) + 4;
}

function getHalfSize(userInput) {
    return getSize(userInput) / 2;
}

userInputs.forEach((input) => {
    console.log(input.name);
    for (let row = 0; row < getSize(input.size); row++) {
        let line = '';
        for (let col = 0; col < getSize(input.size); col++) {
            if (row < getHalfSize(input.size)) {
                if (col >= getHalfSize(input.size)) {
                    line += (row >= 1 && row <= input.size && col < getSize(input.size) - 1 && col >= getSize(input.size) - input.size - 1) ? '#' : '+';
                } else {
                    line += (row + col + 1 < getHalfSize(input.size)) ? '.' : '#';
                }
            } else {
                if (col >= getHalfSize(input.size)) {
                    line += (row + col > getSize(input.size) + input.size + 1) ? '.' : '+';
                } else {
                    line += (row > getHalfSize(input.size) && row < getSize(input.size) - 1 && col >= 1 && col < getHalfSize(input.size) - 1) ? '+' : '#';
                }
            }
        }
        console.log(line);
    }
    console.log();
});
