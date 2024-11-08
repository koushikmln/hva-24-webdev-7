const item = document.getElementById("btn");
item.addEventListener("click", fun);

async function fun() {
    let userId = document.getElementById("input").value;
    const ele = document.getElementById("posts");
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    try {
        if (!response.ok) {
            throw new Error("Error in fetching posts");
            return;
        }
        ele.innerHTML = "";
        const postData = await response.json();
        //console.log(typeof(data));

        for (let i = 0; i < postData.length; i++) {
            const myDiv = document.createElement("div");
            myDiv.classList.add("post-box");
            myDiv.innerHTML = `<h3>Post Title: ${postData[i].title}</h3>
                <span><strong>Post Data:</strong> ${postData[i].body} </span><br><br>`
            let postId = postData[i].id;
            try {
                const response2 = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

                if (!response2.ok) {
                    throw new Error("Error fetching comments");
                }
                const commentsData = await response2.json();
                for (let j = 0; j < commentsData.length; j++) {
                    const myDiv2 = document.createElement("div");
                    myDiv2.innerHTML = `<strong> Comment ${j+1} </strong> ${commentsData[j].body}`;
                    myDiv.append(myDiv2);
                }
            } catch (error) {
                console.error(error);
            }
            ele.append(myDiv);
        }
    } catch (error) {
        console.error(error);
    }
}