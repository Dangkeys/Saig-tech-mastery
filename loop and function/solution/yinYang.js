let userInput = 5;

function getSize() {
    return (2 * userInput) + 4;
}

function getHalfSize() {
    return getSize() / 2;
}

for (let row = 0; row < getSize(); row++) {
    let line = '';
    for (let col = 0; col < getSize(); col++) {
        if (row < getHalfSize()) {
            if (col >= getHalfSize()) {
                line += (row >= 1 && row <= userInput && col < getSize() - 1 && col >= getSize() - userInput - 1) ? '#' : '+';
            } else {
                line += (row + col + 1 < getHalfSize()) ? '.' : '#';
            }
        } else {
            if (col >= getHalfSize()) {
                line += (row + col > getSize() + userInput + 1) ? '.' : '+';
            } else {
                line += (row > getHalfSize() && row < getSize() - 1 && col >= 1 && col < getHalfSize() - 1) ? '+' : '#';
            }
        }
    }
    console.log(line);
}
