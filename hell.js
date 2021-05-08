const db = require('./db')

const fetchUserById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const results = db.users.find(i => i.id === id);
            results ?
                resolve(results) :
                reject('Not found');
        }, 500);
    });
};

const fetchPostsByUserId = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const results = db.posts.filter(i => i.userId === userId);
            results.length ?
                resolve(results) :
                reject('Not found');
        }, 500);
    });
};

const fetchCommentsByPostId = (postId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const results = db.comments.filter(i => i.postId === postId);
            results.length ?
                resolve(results) :
                reject('Not found');
        }, 500);
    });
};

let result;

fetchUserById(1)
    .then(user => {
        result = user;
        return fetchPostsByUserId(user.id);
    })
    .then(posts => {
        result.posts = posts;
        return Promise.all(result.posts.map(i => fetchCommentsByPostId(i.id)));
    })
    .then(comments => {
        result.posts.forEach(post => post.comments = comments.flat().filter(i => i.postId === post.id));
        return result;
    })
    .then(result => console.log('User:', result))
    .catch(error => console.log('Error:', error));