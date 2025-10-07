const BASE_URL = "https://post-backend-6sm6.onrender.com";

console.log("heyyy")
//elements
const postDiv = document.getElementById("posts");

window.onload = getAllPosts();

async function getPosts() {
    const response = await fetch('${BASE_URL}/posts');
    const data = await response.json();

    postDiv.innerHTML = data.map(post => 
        <div class="post">
            <h3>${post.title}</h3>
            <p>{post.message}</p>
        </div>
        
    )
}