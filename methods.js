const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve('resolve 1'), 3000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('reject 2'), 500));
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve('resolve 3'), 2000));
const promise4 = new Promise((resolve, reject) => setTimeout(() => resolve('resolve 4'), 1500));
const promise5 = new Promise((resolve, reject) => setTimeout(() => resolve('resolve 5'), 2500));

// wait until all are resolved, go to catch if any of them rejected
// Promise.all([promise1, promise2, promise3, promise4, promise5])
//     .then(promises => {
//         promises.forEach(result => console.log(result));
//     })
//     .catch(error => console.log(error));

// wait until all are resolved or rejected, show status of each in this format: { status: 'fulfilled', value: 'resolve 1' }
// Promise.allSettled([promise1, promise2, promise3, promise4, promise5])
//     .then(promises => {
//         promises.forEach(result => console.log(result));
//     })
//     .catch(error => console.log(error));

// wait until any of them either resolved or rejected
// Promise.race([promise1, promise2, promise3, promise4, promise5])
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => console.log(error));