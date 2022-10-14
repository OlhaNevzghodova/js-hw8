let hours = +prompt('Enter amount of hours');

while (isNaN(hours)) {
    hours = +prompt('Enter amount of hours')
}

const seconds = 3600;
const result = hours * seconds;

if (hours !== 0) {
    alert(`In ${hours} hours ${result} seconds`);
}

