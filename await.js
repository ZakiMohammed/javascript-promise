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

(async function () {
    try {
        const user = await fetchUserById(1);
        const posts = await fetchPostsByUserId(user.id);
        const comments = await Promise.all(posts.map(i => fetchCommentsByPostId(i.id)));

        user.posts = posts.map(post => ({
            ...post,
            comments: comments.flat().filter(i => i.postId === post.id)
        }));
        console.log('User:', user);
    } catch (error) {
        console.log('Error:', error)
    }
})();