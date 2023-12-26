let mainDiv = document.getElementsByClassName('main')[0];
let secDiv = document.getElementsByClassName('sec-main')[0];

// Fetch user data
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(function (user) {
            let nameUser = document.createElement('ul');
            nameUser.className = "nameUser";
            let userLi = document.createElement('li');
            userLi.textContent = user.name;
            userLi.setAttribute("data-user-id", user.id);
            nameUser.appendChild(userLi);
            mainDiv.appendChild(nameUser);
            //show post
            userLi.addEventListener('click', async function () {
                document.querySelectorAll('.nameUser li').forEach(li => {
                    li.classList.remove('selectedUser');

                });


                userLi.classList.add('selectedUser');
                secDiv.innerHTML = '';
                try {
                    let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
                    let posts = await postsResponse.json();
                    let postUL = document.createElement('ul');
                    postUL.className = 'posts';
                    posts.forEach(post => {
                        let postLi = document.createElement('li');
                        postLi.textContent = post.body;
                        postUL.appendChild(postLi);
                    });
                    secDiv.appendChild(postUL);
                } catch (error) {
                    console.log("Error fetching or displaying posts:", error);
                }
            });
        });
    })
    .catch(err => {
        console.log("Error fetching user data:", err);
    });



