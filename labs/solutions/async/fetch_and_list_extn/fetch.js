(function() {
    'use strict';
 
    window.addEventListener('load', init);

    function getJSON(path) {
        return fetch(path).then(res => res.json());
    }

    function append(element, parent) {
        parent.appendChild(element);
    }

    const mapAppend = parent => element => append(element, parent);

    function createUserDiv(user) {

        const div = document.createElement('div');
        div.className = 'user';

        const h2 = document.createElement('h2');
        h2.innerText = user.name;

        const p = document.createElement('p');
        p.innerText = user.company.catchPhrase;

        div.appendChild(h2);
        div.appendChild(p);

        return div;
    }

    function createPostsList(posts) {
        const ul = document.createElement('ul');
        ul.className = 'posts';

        void posts.map(post => {
            const li = document.createElement('li');
            li.innerText = post.title;
            li.className = 'post';
            ul.appendChild(li);
            return li;
        });


        return ul;
    }

    function init() {

        const output = document.getElementById('output');

        Promise.all([
            getJSON('https://jsonplaceholder.typicode.com/users'),
            getJSON('https://jsonplaceholder.typicode.com/posts')
        ])
        .then(([users, posts]) => {
            const postsMap = posts.reduce((postsMap, post) => {
                if (!postsMap[post.userId])
                    postsMap[post.userId] = [];
                
                postsMap[post.userId].push(post);
                return postsMap;

            }, {});
            
            return users.map(user => {
                user.posts = postsMap[user.id];
                return user;
            });

        })
        .then(users => {
            return users.map(user => {
                const userDiv = createUserDiv(user);
                userDiv.appendChild(createPostsList(user.posts));
                return userDiv;
            });
        })
        .then(elements => elements.map(mapAppend(output)));
            
    }
 }());
 