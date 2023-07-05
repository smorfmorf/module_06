function isPr(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const res = isPr(53);
console.log("res: ", res);
