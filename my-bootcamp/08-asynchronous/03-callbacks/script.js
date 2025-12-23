/*
 Callbacks
 - A callback is a function passed into another function as an argument, 
 which is then invoked inside the outer function to complete some kind of routine or action.

References:
- https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

*/ 
////////////////////////////////////////////////////////////////

// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

// Simulate creating a post (asynchronous operation), 
// takes a callback to be called after creation
function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post' }, getPosts);
