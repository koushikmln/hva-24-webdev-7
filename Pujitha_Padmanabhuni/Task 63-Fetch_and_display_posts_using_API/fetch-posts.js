fetch(' https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        console.log(response);
        return response.json();
    })
    .then(data => {
        const ele = document.getElementById("posts");
        data.forEach(post => {
            const myDiv = document.createElement("div");
            myDiv.innerHTML = `<h3>${post.title}</h3>
                <p>${post.userId}
                <p>${post.title},
                <p>${post.body}`;
            ele.appendChild(myDiv);
        });
    })
    .catch(error => {
        console.error("There is a problem in fetching");
    });