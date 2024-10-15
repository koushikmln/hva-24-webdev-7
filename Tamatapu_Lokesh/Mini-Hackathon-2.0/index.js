fetch("https://the-trivia-api.com/api/questions?limit=2")
 .then(response => response.json)
 .then(data => console.log(data))
 .catch(error => console.error(error));