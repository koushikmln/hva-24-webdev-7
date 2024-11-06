document.getElementById('button').addEventListener('click', async () => { 

    const userId = document.getElementById('userId').value; 



    if (userId) { 

        try { 

            const posts = await fetchPosts(userId); 

            const postsContainer = document.getElementById('posts'); 

            postsContainer.innerHTML = ''; // Clear previous content 



            for (const post of posts) { 

                const postDiv = document.createElement('div'); 

                postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`; 



                const comments = await fetchComments(post.id); 

                const commentsDiv = document.createElement('div'); 

                commentsDiv.style.marginLeft = '20px'; // Indent comments 



                comments.forEach(comment => { 

                    const commentP = document.createElement('p'); 

                    commentP.textContent = `- ${comment.body}`; 

                    commentsDiv.appendChild(commentP); 

                }); 



                postDiv.appendChild(commentsDiv); 

                postsContainer.appendChild(postDiv); 

            } 

        } catch (error) { 

            console.error('Error fetching posts or comments:', error); 

        } 

    } else { 

        console.warn('Please enter a User ID.'); 

    } 

}); 



async function fetchPosts(userId) { 

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`); 

    return response.json(); 

} 



async function fetchComments(postId) { 

    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`); 

    return response.json(); 

}