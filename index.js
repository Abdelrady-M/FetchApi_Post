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




// task_2////////////////////////
// const studentSet = new Set(['ali', 'ahmed', 'mohamed', 'mahmoud', 'fatma']);


// studentSet.add('abdelrady');
// console.log(studentSet);

// studentSet.add('abdelrady');
// console.log(studentSet);

// console.log(...studentSet);

// for (let student of studentSet) {
//     console.log(student);
// }


//task_3//////////////////////

// let studentMap = new Map();


// studentMap.set("Abdelrady Mohamed", {
//     Grades: [
//         { Coursename: "JavaScript", Grade: "Excellent" },
//         { Coursename: "Jquery", Grade: "Good" },
//         { Coursename: "CSS", Grade: "V.Good" }
//     ]
// });

// studentMap.set("Ahmed", {
//     Grades: [
//         { Coursename: "JavaScript", Grade: "Good" },
//         { Coursename: "Jquery", Grade: "Excellent" },
//         { Coursename: "CSS", Grade: "Excellent" }
//     ]
// });


// studentMap.forEach((grades, studentName) => {
//     console.log(`${studentName} grades:`);
//     grades.Grades.forEach(course => {
//         console.log(`${course.Coursename}: ${course.Grade}`);
//     });
//     console.log();
// });
