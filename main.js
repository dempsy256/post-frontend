const BASE_URL = "https://post-backend-6sm6.onrender.com";

console.log("heyyy")
//elements
const postDiv = document.getElementById("posts");

window.onload = getAllPosts();

async function getPosts() {
    const response = await fetch('${BASE_URL}/posts');
    const data = await response.json();

    console.log(data)

    postDiv.innerHTML = data.posts.map(post => 
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.message}</p>
        </div>     
    ).join('');
}

// Register a new user
document.getElementById("registerBtn").addEventListener("click", async () => {
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;

const res = await fetch('${BASE_URL}/user/register', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ firstName, lastName, email, password, confirmPassword})
});

const data = await resizeBy.json();

alert(data.message)


})

//LOGIN
document.getElementById("loginBtn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const res = await fetch('${BASE_URL}/user/login', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password})
})


const data = await res.json();

if(data.token) {
    localStorage.setItem("token", data.token);
    alert("login successful");
    createPostSection.classList.remove("hidden")
} else {
    alert(data.message)
}
});

//create a new post
document.getElementById("createPostBtn").addEventListener("click", async => {
    const title = document.getElementById("title").value;

})