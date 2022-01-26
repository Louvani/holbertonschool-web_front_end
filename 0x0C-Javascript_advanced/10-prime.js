function countPrimeNumbers() {
    let count = 0;
    for (let prime = 2; prime <= 100; prime++) {
        let isPrime = true;
        for (let divisor = 2; divisor < prime; divisor++) {
            if (prime % divisor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count++;
        }
    }
    return count;
}

const startTime = performance.now();

for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}

const endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was  ${endTime - startTime} milliseconds.`);
