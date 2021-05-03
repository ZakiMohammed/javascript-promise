const db = require('./db')

const fetchUserById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const results = db.users.find(i => i.id === id);
            results ?
                resolve(results) :
                reject('Not found');
        }, 2000);
    });
};

fetchUserById(1)
    .then(user => console.log('User:', user))
    .catch(err => console.log('Error:', err))
    .finally(() => console.log('I am Inevitable'));