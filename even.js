const isEven = (number) => {
    return new Promise((resolve, reject) => {
        // super complex math problem
        if (number % 2 === 0) {
            resolve();
        } else {
            reject();
        }
    });
};

// isEven(11)
//     .then(() => console.log("Yay! it's even"))
//     .catch(() => console.log("Meh! it's odd"));

isEven(4)
    .then(
        () => console.log("Yay! it's even"),
        () => console.log("Meh! it's odd")
    );