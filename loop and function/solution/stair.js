let height = 5;

function printStaircase(height) {
    for (let i = 0; i < height; i++) {
        let stairs = '';
        // Add leading spaces
        for (let j = 0; j < height - i - 1; j++) {
            stairs += ' ';
        }
        // Add left side hashes
        for (let k = 0; k <= i; k++) {
            stairs += '#';
        }
        // Add space between the left and right sides
        stairs += ' ';
        // Add right side hashes
        for (let k = 0; k <= i; k++) {
            stairs += '#';
        }
        console.log(stairs);
    }
}

printStaircase(height);