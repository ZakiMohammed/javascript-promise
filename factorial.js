const factorial = (number) => {
    return new Promise((resolve, reject) => {
        if (typeof number === 'number') {
            let fact = 1;
            for (let i = 1; i <= number; i++) {
                fact *= i;
            }
            resolve(fact);
        } else {
            reject('The number provided must be of type number');
        }
    });
};

factorial(3)
    .then(result => console.log('Factorial:', result))
    .catch(error => console.log('Error:', error));