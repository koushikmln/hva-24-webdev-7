async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    
    const postsContainer = document.getElementById("posts");
    posts.forEach(post => {
      const postDiv = document.createElement("div");
      postDiv.innerHTML = `
        <h2>Post ID: ${post.id}</h2>
        <p><strong>User ID:</strong> ${post.userId}</p>
        <p><strong>Title:</strong> ${post.title}</p>
        <p><strong>Body:</strong> ${post.body}</p>
      `;
      postsContainer.appendChild(postDiv);
    });
  } catch (error) {
    console.log("Error fetching posts:", error);
  }
}

fetchPosts();
