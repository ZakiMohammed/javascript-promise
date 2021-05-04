const p1 = new Promise((resolve, reject) => setTimeout(() => reject('reject 1'), 3000));
const p2 = new Promise((resolve, reject) => setTimeout(() => reject('reject 2'), 500));
const p3 = new Promise((resolve, reject) => setTimeout(() => reject('reject 3'), 2000));

const promises = [p1, p2, p3];

// wait until all are resolved, go to catch if any of them rejected
Promise.all(promises)
    .then(result => result.forEach(result => console.log(result)))
    .catch(error => console.log(error));
    

// // wait until all are resolved or rejected, show status of each in this format: { status: 'fulfilled', value: 'resolve 1' }
// Promise.allSettled(promises)
//     .then(result => result.forEach(result => console.log('allSettled', result)))
//     .catch(error => console.log('allSettled', error));

// // wait until any of them either resolved or rejected
// Promise.race(promises)
//     .then(result => console.log('race', result))
//     .catch(error => console.log('race', error));

// // wait until any of them resolved, go to catch if all of them rejected (opposite of all)
// Promise.any(promises)
//     .then(result => console.log('any', result))
//     .catch(error => console.log('any', error));