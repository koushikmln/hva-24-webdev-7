const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const footer = document.querySelector('.footer');

menuIcon.addEventListener('click', () => {
    sideBar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
    footer.classList.toggle('hide-footer');
});

const videoListContainer = document.getElementById('video-list-container');
const searchBar = document.getElementById('searchBar');

// Fetch video data from JSON and display it
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        // Initially display all videos
        displayVideos(data);

        // Search functionality
        searchBar.addEventListener('input', () => {
            const searchText = searchBar.value.toLowerCase();
            const filteredVideos = data.filter(video =>
                video.title.toLowerCase().includes(searchText) ||
                video.channel.toLowerCase().includes(searchText)
            );
            displayVideos(filteredVideos);
        });
    })
    .catch(error => console.error('Error fetching video data:', error));

// Function to display videos
function displayVideos(videos) {
    videoListContainer.innerHTML = ''; // Clear previous results

    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-list');

        videoElement.innerHTML = `
            <div class="thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
            </div>
            <div class="video-info">
                <div class="flex-div">
                    <img src="${video.thumbnail}" alt="${video.channel}">
                    <div>
                        <a href="#">${video.title}</a>
                        <p>${video.channel}</p>
                        <p>${video.views}</p>
                    </div>
                </div>
            </div>
        `;

        videoListContainer.appendChild(videoElement);
    });
}
